import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["REG"],
  pin2: ["SCL"],
  pin3: ["SDA"],
  pin4: ["pin4"],
  pin5: ["EN"],
  pin6: ["pin6"],
  pin7: ["OUT_POS"],
  pin8: ["GND"],
  pin9: ["OUT_NEG"],
  pin10: ["VDD"]
} as const

export const DRV2605LDGSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C527464"
  ]
}}
      manufacturerPartNumber="DRV2605LDGSR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.999871mm" pcbY="-2.350008mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.499999mm" pcbY="-2.350008mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.000127mm" pcbY="-2.350008mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.499999mm" pcbY="-2.350008mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.000125mm" pcbY="-2.350008mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.999871mm" pcbY="2.350008mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.499999mm" pcbY="2.350008mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.000127mm" pcbY="2.350008mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.499999mm" pcbY="2.350008mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.000125mm" pcbY="2.350008mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<silkscreenpath route={[{"x":-1.5784830000000056,"y":1.5365221999999932},{"x":1.5215869999999967,"y":1.5365221999999932}]} />
<silkscreenpath route={[{"x":1.5215869999999967,"y":-1.5635478000000091},{"x":1.5215869999999967,"y":1.5365221999999932}]} />
<silkscreenpath route={[{"x":-1.5784830000000056,"y":-1.562277800000004},{"x":1.5215869999999967,"y":-1.562277800000004}]} />
<silkscreenpath route={[{"x":-1.6026130000000052,"y":1.5365221999999932},{"x":-1.6026130000000052,"y":0.6983222000000069}]} />
<silkscreenpath route={[{"x":-1.6026130000000052,"y":-0.7240778000000034},{"x":-1.6026130000000052,"y":-1.562277800000004}]} />
<silkscreenpath route={[{"x":-1.6026130000000052,"y":0.6729222000000021},{"x":-1.3955278102578177,"y":0.570256723115321},{"x":-1.2308116008042873,"y":0.40810541631279307},{"x":-1.1249090052417472,"y":0.20265684316703414},{"x":-1.0883929318913914,"y":-0.025577799999993545},{"x":-1.1249090052417472,"y":-0.25381244316703544},{"x":-1.2308116008042873,"y":-0.45926101631278016},{"x":-1.3955278102578177,"y":-0.6214123231153224},{"x":-1.6026130000000052,"y":-0.7240778000000034}]} />
<silkscreentext text="{NAME}" pcbX="-0.053213mm" pcbY="4.004312mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.8780129999999957,"y":3.2543119999999988},{"x":1.7715869999999967,"y":3.2543119999999988},{"x":1.7715869999999967,"y":-3.240088},{"x":-1.8780129999999957,"y":-3.240088},{"x":-1.8780129999999957,"y":3.2543119999999988}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C527464.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C527464.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  )
}