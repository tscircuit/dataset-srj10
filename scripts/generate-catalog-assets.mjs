import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { AutoroutingPipelineSolver } from "@tscircuit/capacity-autorouter";
import { getSvgFromGraphicsObject } from "graphics-debug";
import * as React from "react";
import { RootCircuit, getSimpleRouteJsonFromCircuitJson } from "tscircuit";
import Circuit from "../index.circuit";

Object.assign(globalThis, { React });

const circuit = new RootCircuit();
circuit.schematicDisabled = true;
const sourceElement = Circuit();
const unroutedElement = React.cloneElement(sourceElement, {
	routingDisabled: true,
	schematicDisabled: true,
});
circuit.add(unroutedElement);
await circuit.renderUntilSettled();

const { simpleRouteJson } = getSimpleRouteJsonFromCircuitJson({
	circuitJson: circuit.getCircuitJson(),
	minTraceWidth: 0.15,
});
const sample = {
	...simpleRouteJson,
	id: "sample001-xmos-usb-audio",
	metadata: {
		title: "XU208 USB audio interface core",
		source: "circuits/xmos-xu208-usb-audio-interface-core/index.circuit.tsx",
	},
};

const sampleUrl = new URL(
	"../samples/sample001-xmos-usb-audio.srj.json",
	import.meta.url,
);
await mkdir(dirname(sampleUrl.pathname), { recursive: true });
await Bun.write(sampleUrl, `${JSON.stringify(sample, null, 2)}\n`);

const solver = new AutoroutingPipelineSolver(structuredClone(sample));
const svg = getSvgFromGraphicsObject(solver.visualize(), {
	backgroundColor: "#ffffff",
	svgWidth: 1200,
	svgHeight: 800,
}).replace(/[ \\t]+$/gm, "");
const imageUrl = new URL("../docs/sample.svg", import.meta.url);
await mkdir(dirname(imageUrl.pathname), { recursive: true });
await Bun.write(imageUrl, svg);

console.log(`Wrote ${sampleUrl.pathname}`);
console.log(`Wrote ${imageUrl.pathname}`);
