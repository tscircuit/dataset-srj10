import { DRV2605LDGSR } from "../../imports/DRV2605LDGSR"

interface Cm5HapticsSubsystemProps {
  name?: string
  pcbX?: number | string
  pcbY?: number | string
  pcbRotation?: number | string
  schX?: number | string
  schY?: number | string
}

export const Cm5HapticsSubsystem = (props: Cm5HapticsSubsystemProps) => {
  const vdd = "net.HAPTICS_3V3"
  const gnd = "net.GND"

  return (
    <group
      name={props.name}
      pcbX={props.pcbX}
      pcbY={props.pcbY}
      pcbRotation={props.pcbRotation}
      schX={props.schX}
      schY={props.schY}
    >
      <DRV2605LDGSR
        name="U_HAPTIC_L"
        pcbX={-11}
        pcbY={0}
        schX={-5}
        schY={0}
        connections={{
          VDD: vdd,
          REG: vdd,
          EN: vdd,
          SCL: "net.HAPTIC_L_SCL",
          SDA: "net.HAPTIC_L_SDA",
          OUT_POS: "net.HAPTIC_L_POS",
          OUT_NEG: "net.HAPTIC_L_NEG",
          GND: gnd,
        }}
      />
      <pinheader
        name="J_HAPTIC_L"
        pinCount={2}
        pitch="2mm"
        pcbX={-20}
        pcbY={0}
        schX={-10}
        schY={0}
        connections={{
          pin1: "net.HAPTIC_L_POS",
          pin2: "net.HAPTIC_L_NEG",
        }}
      />

      <DRV2605LDGSR
        name="U_HAPTIC_R"
        pcbX={11}
        pcbY={0}
        schX={5}
        schY={0}
        connections={{
          VDD: vdd,
          REG: vdd,
          EN: vdd,
          SCL: "net.HAPTIC_R_SCL",
          SDA: "net.HAPTIC_R_SDA",
          OUT_POS: "net.HAPTIC_R_POS",
          OUT_NEG: "net.HAPTIC_R_NEG",
          GND: gnd,
        }}
      />
      <pinheader
        name="J_HAPTIC_R"
        pinCount={2}
        pitch="2mm"
        pcbX={20}
        pcbY={0}
        schX={10}
        schY={0}
        connections={{
          pin1: "net.HAPTIC_R_POS",
          pin2: "net.HAPTIC_R_NEG",
        }}
      />
    </group>
  )
}
