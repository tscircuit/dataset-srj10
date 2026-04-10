import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["STAT"],
  pin2: ["VBUS1"],
  pin3: ["VBUS2"],
  pin4: ["BTST1"],
  pin5: ["REGN"],
  pin6: ["D_POS"],
  pin7: ["D_NEG"],
  pin8: ["VAC2"],
  pin9: ["VAC1"],
  pin10: ["ACDRV2"],
  pin11: ["ACDRV1"],
  pin12: ["QON"],
  pin13: ["CE"],
  pin14: ["SCL"],
  pin15: ["SDA"],
  pin16: ["TS"],
  pin17: ["ILIM_HIZ"],
  pin18: ["BATP"],
  pin19: ["BTST2"],
  pin20: ["PROG"],
  pin21: ["INT"],
  pin22: ["BAT2"],
  pin23: ["BAT1"],
  pin24: ["SDRV"],
  pin25: ["SYS"],
  pin26: ["SW2"],
  pin27: ["GND"],
  pin28: ["SW1"],
  pin29: ["PMID"]
} as const

export const BQ25792RQMR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2862876"
  ]
}}
      manufacturerPartNumber="BQ25792RQMR"
      footprint={<footprint>
        <smtpad portHints={["pin16"]} points={[{x: "2.2500209mm", y: "-1.7000728mm"}, {x: "2.2500209mm", y: "-1.4999716mm"}, {x: "2.2500209mm", y: "-1.4999716mm"}, {x: "1.5500731mm", y: "-1.4999716mm"}, {x: "1.5500731mm", y: "-1.4999716mm"}, {x: "1.5500731mm", y: "-1.4999716mm"}, {x: "1.5500731mm", y: "-1.4999716mm"}, {x: "1.3500989mm", y: "-1.4999716mm"}, {x: "1.3500989mm", y: "-1.4999716mm"}, {x: "1.3499719mm", y: "-1.4999716mm"}, {x: "1.3499719mm", y: "-1.4999716mm"}, {x: "1.3499719mm", y: "-1.7000728mm"}, {x: "1.3499719mm", y: "-1.7000728mm"}, {x: "1.3500989mm", y: "-1.7000728mm"}, {x: "1.3500989mm", y: "-1.7000728mm"}, {x: "1.3500989mm", y: "-2.200021mm"}, {x: "1.3500989mm", y: "-2.200021mm"}, {x: "1.5500731mm", y: "-2.200021mm"}, {x: "1.5500731mm", y: "-2.200021mm"}, {x: "1.5500731mm", y: "-1.7000728mm"}, {x: "1.5500731mm", y: "-1.7000728mm"}, {x: "2.2500209mm", y: "-1.7000728mm"}]} shape="polygon" />
<smtpad portHints={["pin9"]} points={[{x: "-1.3499211mm", y: "-1.7000728mm"}, {x: "-1.3499211mm", y: "-1.4999716mm"}, {x: "-1.3499211mm", y: "-1.4999716mm"}, {x: "-1.3500481mm", y: "-1.4999716mm"}, {x: "-1.3500481mm", y: "-1.4999716mm"}, {x: "-1.5500223mm", y: "-1.4999716mm"}, {x: "-1.5500223mm", y: "-1.4999716mm"}, {x: "-1.5500223mm", y: "-1.4999716mm"}, {x: "-1.5500223mm", y: "-1.4999716mm"}, {x: "-2.2499193mm", y: "-1.4999716mm"}, {x: "-2.2499193mm", y: "-1.4999716mm"}, {x: "-2.2499193mm", y: "-1.7000728mm"}, {x: "-2.2499193mm", y: "-1.7000728mm"}, {x: "-1.5500223mm", y: "-1.7000728mm"}, {x: "-1.5500223mm", y: "-1.7000728mm"}, {x: "-1.5500223mm", y: "-2.200021mm"}, {x: "-1.5500223mm", y: "-2.200021mm"}, {x: "-1.3500481mm", y: "-2.200021mm"}, {x: "-1.3500481mm", y: "-2.200021mm"}, {x: "-1.3500481mm", y: "-1.7000728mm"}, {x: "-1.3500481mm", y: "-1.7000728mm"}, {x: "-1.3499211mm", y: "-1.7000728mm"}]} shape="polygon" />
<smtpad portHints={["pin24"]} points={[{x: "1.5000351mm", y: "1.699641mm"}, {x: "1.5000351mm", y: "2.199767mm"}, {x: "1.5000351mm", y: "2.199767mm"}, {x: "1.2999847mm", y: "2.199767mm"}, {x: "1.2999847mm", y: "2.199767mm"}, {x: "1.2999847mm", y: "1.699641mm"}, {x: "1.2999847mm", y: "1.699641mm"}, {x: "1.2999847mm", y: "1.4997176mm"}, {x: "1.2999847mm", y: "1.4997176mm"}, {x: "1.2999847mm", y: "1.4997176mm"}, {x: "1.2999847mm", y: "1.4997176mm"}, {x: "2.2500209mm", y: "1.4997176mm"}, {x: "2.2500209mm", y: "1.4997176mm"}, {x: "2.2500209mm", y: "1.699641mm"}, {x: "2.2500209mm", y: "1.699641mm"}, {x: "1.5000351mm", y: "1.699641mm"}]} shape="polygon" />
<smtpad portHints={["pin1"]} points={[{x: "-1.2999593mm", y: "1.6999966mm"}, {x: "-1.2999593mm", y: "2.1999956mm"}, {x: "-1.2999593mm", y: "2.1999956mm"}, {x: "-1.4999843mm", y: "2.1999956mm"}, {x: "-1.4999843mm", y: "2.1999956mm"}, {x: "-1.4999843mm", y: "1.6999966mm"}, {x: "-1.4999843mm", y: "1.6999966mm"}, {x: "-2.2499193mm", y: "1.6999966mm"}, {x: "-2.2499193mm", y: "1.6999966mm"}, {x: "-2.2499193mm", y: "1.4999462mm"}, {x: "-2.2499193mm", y: "1.4999462mm"}, {x: "-1.2999339mm", y: "1.4999462mm"}, {x: "-1.2999339mm", y: "1.4999462mm"}, {x: "-1.2999339mm", y: "1.6999966mm"}, {x: "-1.2999339mm", y: "1.6999966mm"}, {x: "-1.2999593mm", y: "1.6999966mm"}]} shape="polygon" />
<smtpad portHints={["pin2"]} pcbX="-1.9500215mm" pcbY="1.199769mm" width="0.5999988mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.9500215mm" pcbY="0.799719mm" width="0.5999988mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.9500215mm" pcbY="0.399669mm" width="0.5999988mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-1.9500215mm" pcbY="-0.000381mm" width="0.5999988mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-1.9500215mm" pcbY="-0.400431mm" width="0.5999988mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-1.9500215mm" pcbY="-0.800227mm" width="0.5999988mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.9500215mm" pcbY="-1.200277mm" width="0.5999988mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="0.9999345mm" pcbY="-1.900047mm" width="0.1999996mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.0000615mm" pcbY="-1.900047mm" width="0.1999996mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.6000115mm" pcbY="-1.900047mm" width="0.1999996mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.1999615mm" pcbY="-1.900047mm" width="0.1999996mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.1998345mm" pcbY="-1.900047mm" width="0.1999996mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-0.4501515mm" pcbY="1.699895mm" width="0.2199894mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-0.0000635mm" pcbY="1.699895mm" width="0.2199894mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="0.4502785mm" pcbY="1.699895mm" width="0.2199894mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="0.8998585mm" pcbY="1.699895mm" width="0.2199894mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-0.8997315mm" pcbY="1.725041mm" width="0.2199894mm" height="0.9500108mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="1.9498945mm" pcbY="1.199769mm" width="0.5999988mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="1.9498945mm" pcbY="0.799719mm" width="0.5999988mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="1.9498945mm" pcbY="0.399669mm" width="0.5999988mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="1.9498945mm" pcbY="-0.000381mm" width="0.5999988mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.9100165mm" pcbY="-0.400558mm" width="0.6800088mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.9250025mm" pcbY="-0.800227mm" width="0.6500114mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="1.8998565mm" pcbY="-1.200277mm" width="0.6999986mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.5998845mm" pcbY="-1.900047mm" width="0.1999996mm" height="0.5999988mm" shape="rect" />
<silkscreenpath route={[{"x":-1.9999578999999983,"y":1.881174800000025},{"x":-1.9999578999999983,"y":1.9740118000000137}]} />
<silkscreenpath route={[{"x":-1.7311497000000031,"y":-1.9999197999999865},{"x":-1.9999578999999983,"y":-1.9999197999999865},{"x":-1.9999578999999983,"y":-1.8811493999999698}]} />
<silkscreenpath route={[{"x":1.9980275000000063,"y":-1.8812001999999808},{"x":1.9980275000000063,"y":-1.9999197999999865},{"x":1.7312005,"y":-1.9999197999999865}]} />
<silkscreenpath route={[{"x":1.6811625000000134,"y":1.9998944000000165},{"x":1.9980275000000063,"y":1.9998944000000165},{"x":1.9980275000000063,"y":1.8808700000000158}]} />
<silkscreenpath route={[{"x":-1.9999578999999983,"y":1.9998944000000165},{"x":-1.6811116999999882,"y":1.9998944000000165}]} />
<silkscreentext text="{NAME}" pcbX="-0.2423795mm" pcbY="3.206371mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.981579499999995,"y":2.4563710000000185},{"x":2.4968205000000268,"y":2.4563710000000185},{"x":2.4968205000000268,"y":-2.4378289999999794},{"x":-2.981579499999995,"y":-2.4378289999999794},{"x":-2.981579499999995,"y":2.4563710000000185}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862876.obj?uuid=f47be3de30ff4612a9ae20fa50e1adc6",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862876.step?uuid=f47be3de30ff4612a9ae20fa50e1adc6",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  )
}