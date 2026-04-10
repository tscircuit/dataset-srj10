import { MAX98357AETE_T } from "../../imports/MAX98357AETE_T"

interface Cm5StereoAudioSubsystemProps {
  name?: string
  pcbX?: number | string
  pcbY?: number | string
  pcbRotation?: number | string
  schX?: number | string
  schY?: number | string
}

export const Cm5StereoAudioSubsystem = (
  props: Cm5StereoAudioSubsystemProps,
) => {
  const vdd = "net.AUDIO_5V"
  const gnd = "net.GND"
  const bclk = "net.I2S_BCLK"
  const lrclk = "net.I2S_LRCLK"
  const din = "net.I2S_DOUT"

  return (
    <group
      name={props.name}
      pcbX={props.pcbX}
      pcbY={props.pcbY}
      pcbRotation={props.pcbRotation}
      schX={props.schX}
      schY={props.schY}
    >
      <MAX98357AETE_T
        name="U_SPK_L"
        pcbX={-12}
        pcbY={0}
        schX={-5}
        schY={0}
        connections={{
          DIN: din,
          BCLK: bclk,
          LRCLK: lrclk,
          GAIN_SLOT: gnd,
          SD_MODE: vdd,
          VDD1: vdd,
          VDD2: vdd,
          GND1: gnd,
          GND2: gnd,
          GND3: gnd,
        }}
      />
      <pinheader
        name="J_SPK_L"
        pinCount={2}
        pitch="2mm"
        pcbX={-22.5}
        pcbY={0}
        schX={-10}
        schY={0}
        connections={{
          pin1: ".U_SPK_L > .OUTP",
          pin2: ".U_SPK_L > .OUTN",
        }}
      />

      <MAX98357AETE_T
        name="U_SPK_R"
        pcbX={12}
        pcbY={0}
        schX={5}
        schY={0}
        connections={{
          DIN: din,
          BCLK: bclk,
          LRCLK: lrclk,
          GAIN_SLOT: vdd,
          SD_MODE: vdd,
          VDD1: vdd,
          VDD2: vdd,
          GND1: gnd,
          GND2: gnd,
          GND3: gnd,
        }}
      />
      <pinheader
        name="J_SPK_R"
        pinCount={2}
        pitch="2mm"
        pcbX={22.5}
        pcbY={0}
        schX={10}
        schY={0}
        connections={{
          pin1: ".U_SPK_R > .OUTP",
          pin2: ".U_SPK_R > .OUTN",
        }}
      />
    </group>
  )
}
