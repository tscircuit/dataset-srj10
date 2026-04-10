#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

function usage() {
  console.error(
    [
      "Usage: node scripts/net-lengths.mjs <circuit-json> <net-name> [options]",
      "",
      "Options:",
      "  --focus-component <name>   Report nearest focus-component pin distances",
      "  --components <a,b,c>       Restrict focus-distance output to named components",
      "  --component-prefix <pfx>   Restrict focus-distance output to component names with prefix",
      "  --json                     Emit machine-readable JSON",
    ].join("\n"),
  )
}

function parseArgs(argv) {
  if (argv.length < 2) {
    usage()
    process.exit(1)
  }

  const options = {
    circuitJsonPath: argv[0],
    netName: argv[1],
    focusComponent: null,
    components: null,
    componentPrefix: null,
    json: false,
  }

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === "--focus-component") {
      options.focusComponent = argv[++i] ?? null
    } else if (arg === "--components") {
      const raw = argv[++i] ?? ""
      options.components = new Set(
        raw
          .split(",")
          .map((part) => part.trim())
          .filter(Boolean),
      )
    } else if (arg === "--component-prefix") {
      options.componentPrefix = argv[++i] ?? null
    } else if (arg === "--json") {
      options.json = true
    } else {
      console.error(`Unknown option: ${arg}`)
      usage()
      process.exit(1)
    }
  }

  return options
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

function routeLength(route) {
  let total = 0
  for (let i = 1; i < route.length; i += 1) {
    total += Math.hypot(route[i].x - route[i - 1].x, route[i].y - route[i - 1].y)
  }
  return total
}

function mstLength(points) {
  if (points.length <= 1) return 0
  const used = new Set([0])
  const best = new Array(points.length).fill(Number.POSITIVE_INFINITY)

  for (let i = 1; i < points.length; i += 1) {
    best[i] = distance(points[0], points[i])
  }

  let total = 0
  while (used.size < points.length) {
    let nextIndex = -1
    let nextLength = Number.POSITIVE_INFINITY

    for (let i = 0; i < best.length; i += 1) {
      if (used.has(i)) continue
      if (best[i] < nextLength) {
        nextLength = best[i]
        nextIndex = i
      }
    }

    if (nextIndex === -1) break

    used.add(nextIndex)
    total += nextLength

    for (let i = 0; i < points.length; i += 1) {
      if (used.has(i)) continue
      const candidate = distance(points[nextIndex], points[i])
      if (candidate < best[i]) {
        best[i] = candidate
      }
    }
  }

  return total
}

function formatMm(value) {
  return `${value.toFixed(2)}mm`
}

function loadCircuit(circuitJsonPath) {
  const absPath = path.resolve(circuitJsonPath)
  const raw = fs.readFileSync(absPath, "utf8")
  const circuit = JSON.parse(raw)
  if (!Array.isArray(circuit)) {
    throw new Error(`Expected ${absPath} to contain a JSON array`)
  }
  return { absPath, circuit }
}

function buildIndexes(circuit) {
  const sourceNetsById = new Map()
  const sourceNetsByName = new Map()
  const sourcePortsById = new Map()
  const sourceComponentsById = new Map()
  const pcbPortsBySourcePortId = new Map()
  const pcbTraces = []
  const sourceTraces = []

  for (const item of circuit) {
    if (!item || typeof item !== "object") continue
    switch (item.type) {
      case "source_net":
        sourceNetsById.set(item.source_net_id, item)
        sourceNetsByName.set(item.name, item)
        break
      case "source_port":
        sourcePortsById.set(item.source_port_id, item)
        break
      case "source_component":
        sourceComponentsById.set(item.source_component_id, item)
        break
      case "pcb_port":
        if (item.source_port_id) {
          pcbPortsBySourcePortId.set(item.source_port_id, item)
        }
        break
      case "pcb_trace":
        pcbTraces.push(item)
        break
      case "source_trace":
        sourceTraces.push(item)
        break
      default:
        break
    }
  }

  return {
    sourceNetsById,
    sourceNetsByName,
    sourcePortsById,
    sourceComponentsById,
    pcbPortsBySourcePortId,
    pcbTraces,
    sourceTraces,
  }
}

function buildReachableGraph(sourceTraces, targetNetId) {
  const queue = [`net:${targetNetId}`]
  const visited = new Set(queue)
  const reachableSourceTraceIds = new Set()

  while (queue.length > 0) {
    const node = queue.shift()

    for (const trace of sourceTraces) {
      const traceNodes = [
        ...trace.connected_source_port_ids.map((id) => `port:${id}`),
        ...trace.connected_source_net_ids.map((id) => `net:${id}`),
      ]

      if (!traceNodes.includes(node)) continue

      reachableSourceTraceIds.add(trace.source_trace_id)
      for (const neighbor of traceNodes) {
        if (visited.has(neighbor)) continue
        visited.add(neighbor)
        queue.push(neighbor)
      }
    }
  }

  const reachablePortIds = [...visited]
    .filter((node) => node.startsWith("port:"))
    .map((node) => node.slice("port:".length))

  return { reachablePortIds, reachableSourceTraceIds }
}

function analyzeNet(indexes, netName, options) {
  const targetNet = indexes.sourceNetsByName.get(netName)
  if (!targetNet) {
    throw new Error(`Unknown net "${netName}"`)
  }

  const { reachablePortIds, reachableSourceTraceIds } = buildReachableGraph(
    indexes.sourceTraces,
    targetNet.source_net_id,
  )

  const members = []
  for (const sourcePortId of reachablePortIds) {
    const sourcePort = indexes.sourcePortsById.get(sourcePortId)
    const pcbPort = indexes.pcbPortsBySourcePortId.get(sourcePortId)
    if (!sourcePort || !pcbPort) continue

    const sourceComponent = indexes.sourceComponentsById.get(sourcePort.source_component_id)
    if (!sourceComponent) continue

    members.push({
      sourcePortId,
      sourceComponentId: sourcePort.source_component_id,
      componentName: sourceComponent.name,
      portName: sourcePort.name,
      pinNumber: sourcePort.pin_number ?? null,
      x: pcbPort.x,
      y: pcbPort.y,
    })
  }

  members.sort((a, b) => {
    if (a.componentName !== b.componentName) {
      return a.componentName.localeCompare(b.componentName)
    }
    return a.portName.localeCompare(b.portName)
  })

  const actualPcbTraces = indexes.pcbTraces.filter((trace) => {
    if (trace.source_trace_id && reachableSourceTraceIds.has(trace.source_trace_id)) {
      return true
    }
    if (trace.source_trace_id === targetNet.source_net_id) {
      return true
    }
    if (trace.connection_name === targetNet.source_net_id) {
      return true
    }
    return false
  })

  const actualTraceLengthMm = actualPcbTraces.reduce((sum, trace) => {
    if (!Array.isArray(trace.route) || trace.route.length < 2) return sum
    return sum + routeLength(trace.route)
  }, 0)

  const estimatedMstLengthMm = mstLength(members)

  let focus = null
  if (options.focusComponent) {
    const focusMembers = members.filter((member) => member.componentName === options.focusComponent)
    const otherMembers = members.filter((member) => member.componentName !== options.focusComponent)

    const grouped = new Map()
    for (const member of otherMembers) {
      if (options.components && !options.components.has(member.componentName)) continue
      if (
        options.componentPrefix &&
        !member.componentName.startsWith(options.componentPrefix)
      ) {
        continue
      }

      const key = member.componentName
      const entry = grouped.get(key) ?? []
      entry.push(member)
      grouped.set(key, entry)
    }

    const nearest = []
    for (const [componentName, componentMembers] of grouped.entries()) {
      let best = null
      for (const member of componentMembers) {
        for (const focusMember of focusMembers) {
          const lengthMm = distance(member, focusMember)
          if (!best || lengthMm < best.lengthMm) {
            best = {
              componentName,
              componentPortName: member.portName,
              componentPinNumber: member.pinNumber,
              componentX: member.x,
              componentY: member.y,
              focusPortName: focusMember.portName,
              focusPinNumber: focusMember.pinNumber,
              focusX: focusMember.x,
              focusY: focusMember.y,
              lengthMm,
            }
          }
        }
      }
      if (best) nearest.push(best)
    }

    nearest.sort((a, b) => a.lengthMm - b.lengthMm)
    focus = {
      componentName: options.focusComponent,
      memberCount: focusMembers.length,
      focusMembers,
      nearest,
    }
  }

  return {
    netName,
    sourceNetId: targetNet.source_net_id,
    memberCount: members.length,
    members,
    actualPcbTraceCount: actualPcbTraces.length,
    actualTraceLengthMm,
    estimatedMstLengthMm,
    focus,
  }
}

function printHuman(result) {
  console.log(`Net ${result.netName}`)
  console.log(`Members: ${result.memberCount}`)
  if (result.actualPcbTraceCount > 0) {
    console.log(
      `Actual routed length: ${formatMm(result.actualTraceLengthMm)} across ${result.actualPcbTraceCount} pcb_trace objects`,
    )
  } else {
    console.log("Actual routed length: unavailable (no pcb_trace objects for this net)")
  }
  console.log(`Estimated MST length: ${formatMm(result.estimatedMstLengthMm)}`)

  console.log("\nPorts:")
  for (const member of result.members) {
    console.log(
      `  ${member.componentName}.${member.portName} @ (${member.x.toFixed(2)}, ${member.y.toFixed(2)})`,
    )
  }

  if (result.focus) {
    console.log(`\nNearest ${result.netName} members to ${result.focus.componentName}:`)
    for (const item of result.focus.nearest) {
      console.log(
        `  ${item.componentName}.${item.componentPortName} -> ${result.focus.componentName}.${item.focusPortName}: ${formatMm(item.lengthMm)} (${item.componentX.toFixed(2)}, ${item.componentY.toFixed(2)})`,
      )
    }
  }
}

function main() {
  const options = parseArgs(process.argv.slice(2))
  const { circuit } = loadCircuit(options.circuitJsonPath)
  const indexes = buildIndexes(circuit)
  const result = analyzeNet(indexes, options.netName, options)

  if (options.json) {
    console.log(JSON.stringify(result, null, 2))
  } else {
    printHuman(result)
  }
}

main()
