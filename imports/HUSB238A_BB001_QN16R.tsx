import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["D_POS"],
  pin2: ["D_NEG"],
  pin3: ["CC1"],
  pin4: ["CC2"],
  pin5: ["VDD"],
  pin6: ["DBG_N"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["INT_N"],
  pin12: ["EN_N"],
  pin13: ["pin13"],
  pin14: ["FLGIN"],
  pin15: ["GATE"],
  pin16: ["VBUS"],
  pin17: ["GND"]
} as const

export const HUSB238A_BB001_QN16R = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C24833806"
  ]
}}
      manufacturerPartNumber="HUSB238A_BB001_QN16R"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.750062mm" pcbY="-1.450086mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.249936mm" pcbY="-1.450086mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.249936mm" pcbY="-1.450086mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.750062mm" pcbY="-1.450086mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.450086mm" pcbY="-0.750062mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.450086mm" pcbY="-0.249936mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.450086mm" pcbY="0.249936mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.450086mm" pcbY="0.750062mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0.750062mm" pcbY="1.450086mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.249936mm" pcbY="1.450086mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.249936mm" pcbY="1.450086mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.750062mm" pcbY="1.450086mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-1.450086mm" pcbY="0.750062mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-1.450086mm" pcbY="0.249936mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.450086mm" pcbY="-0.249936mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-1.450086mm" pcbY="-0.750062mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0mm" pcbY="0mm" width="1.6999966mm" height="1.6999966mm" shape="rect" />
<silkscreenpath route={[{"x":-1.0804906000000756,"y":-1.5761969999999792},{"x":-1.5761970000000929,"y":-1.0804906000000756}]} />
<silkscreenpath route={[{"x":-1.5761970000000929,"y":1.0804906000000756},{"x":-1.5761970000000929,"y":1.5761970000000929},{"x":-1.0804906000000756,"y":1.5761970000000929}]} />
<silkscreenpath route={[{"x":1.5761969999998655,"y":1.0804906000000756},{"x":1.5761969999998655,"y":1.5761970000000929},{"x":1.0804905999999619,"y":1.5761970000000929}]} />
<silkscreenpath route={[{"x":-1.5761970000000929,"y":-1.0804906000000756},{"x":-1.5761970000000929,"y":-1.5761969999999792},{"x":-1.0804906000000756,"y":-1.5761969999999792}]} />
<silkscreenpath route={[{"x":1.5761969999998655,"y":-1.0804906000000756},{"x":1.5761969999998655,"y":-1.5761969999999792},{"x":1.0804905999999619,"y":-1.5761969999999792}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="2.778mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.0280000000001337,"y":2.02800000000002},{"x":2.02800000000002,"y":2.02800000000002},{"x":2.02800000000002,"y":-2.231200000000058},{"x":-2.0280000000001337,"y":-2.231200000000058},{"x":-2.0280000000001337,"y":2.02800000000002}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C24833806.obj?uuid=6e50ae26fe4f4c2a8ee6b5b5bc616dea",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C24833806.step?uuid=6e50ae26fe4f4c2a8ee6b5b5bc616dea",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}