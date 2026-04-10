import { AFC01_S40FCA_00 } from "../../imports/AFC01_S40FCA_00"

interface DisplayFpc40Props {
  name?: string
  pcbX?: number | string
  pcbY?: number | string
  pcbRotation?: number | string
  schX?: number | string
  schY?: number | string
}

export const DisplayFpc40 = (props: DisplayFpc40Props) => {
  return (
    <group
      name={props.name}
      pcbX={props.pcbX}
      pcbY={props.pcbY}
      pcbRotation={props.pcbRotation}
      schX={props.schX}
      schY={props.schY}
    >
      <AFC01_S40FCA_00 name="J_DSI" pcbX={0} pcbY={0} schX={0} schY={0} />
      <pinheader
        name="J_BACKLIGHT"
        pinCount={4}
        pitch="2mm"
        pcbX={0}
        pcbY={-9}
        schX={0}
        schY={6}
        connections={{
          pin1: "net.BL_PWR",
          pin2: "net.BL_GND",
          pin3: "net.BL_PWM",
          pin4: "net.TOUCH_INT",
        }}
      />
    </group>
  )
}
