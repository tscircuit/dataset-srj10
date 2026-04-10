import type { Connections } from "@tscircuit/props"
import { DF40C_100DS_0_4V_51_ } from "../imports/DF40C_100DS_0_4V_51_"

export type Cm5SocketPin = `pin${number}`

export interface RaspberryPiCm5SocketsProps {
  name?: string
  pcbX?: number | string
  pcbY?: number | string
  pcbRotation?: number | string
  schX?: number | string
  schY?: number | string
  connections?: Connections<Cm5SocketPin>
  socketCenterToCenterMm?: number
  showModuleOutline?: boolean
}

const CM5_SOCKET_CENTER_TO_CENTER_MM = 34

const getSocketConnections = (
  connections: Connections<Cm5SocketPin> | undefined,
  startPin: number,
) =>
  Object.fromEntries(
    Array.from({ length: 100 }, (_, index) => {
      const externalPin = `pin${startPin + index}` as Cm5SocketPin
      const connectionTarget = connections?.[externalPin]
      return connectionTarget
        ? [[`pin${index + 1}`, connectionTarget]]
        : []
    }).flat(),
  )

export const RaspberryPiCm5Sockets = (props: RaspberryPiCm5SocketsProps) => {
  const socketCenterToCenterMm =
    props.socketCenterToCenterMm ?? CM5_SOCKET_CENTER_TO_CENTER_MM
  const halfSocketSpacingMm = socketCenterToCenterMm / 2

  return (
    <group
      name={props.name}
      pcbX={props.pcbX}
      pcbY={props.pcbY}
      pcbRotation={props.pcbRotation}
      schX={props.schX}
      schY={props.schY}
    >
      {props.showModuleOutline !== false ? (
        <>
          <silkscreenrect
            pcbX={0}
            pcbY={0}
            width="55mm"
            height="40mm"
            strokeWidth="0.15mm"
          />
          <silkscreentext
            text="CM5"
            pcbX={0}
            pcbY={0}
            anchorAlignment="center"
            fontSize="1.2mm"
          />
        </>
      ) : null}

      <DF40C_100DS_0_4V_51_
        name="J1"
        pcbX={0}
        pcbY={halfSocketSpacingMm}
        schX={0}
        schY={-6}
        connections={getSocketConnections(props.connections, 1)}
      />
      <DF40C_100DS_0_4V_51_
        name="J2"
        pcbX={0}
        pcbY={-halfSocketSpacingMm}
        schX={0}
        schY={6}
        connections={getSocketConnections(props.connections, 101)}
      />
    </group>
  )
}
