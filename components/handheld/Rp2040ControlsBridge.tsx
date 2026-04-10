import { RP2040 } from "../../imports/RP2040"

interface Rp2040ControlsBridgeProps {
  name?: string
  pcbX?: number | string
  pcbY?: number | string
  pcbRotation?: number | string
  schX?: number | string
  schY?: number | string
}

export const Rp2040ControlsBridge = (props: Rp2040ControlsBridgeProps) => {
  const vdd = "net.CTRL_3V3"
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
      <RP2040
        name="U_CTRL"
        pcbX={0}
        pcbY={0}
        schX={0}
        schY={0}
        connections={{
          IOVDD1: vdd,
          IOVDD2: vdd,
          IOVDD3: vdd,
          IOVDD4: vdd,
          IOVDD5: vdd,
          IOVDD6: vdd,
          ADC_AVDD: vdd,
          USB_VDD: vdd,
          VREG_IN: vdd,
          GND: gnd,
          USB_DP: "net.CTRL_USB_DP",
          USB_DM: "net.CTRL_USB_DM",
          RUN: "net.CTRL_RUN",
          SWCLK: "net.CTRL_SWCLK",
          SWD: "net.CTRL_SWD",
          GPIO0: "net.BTN_A",
          GPIO1: "net.BTN_B",
          GPIO2: "net.BTN_X",
          GPIO3: "net.BTN_Y",
          GPIO4: "net.DPAD_UP",
          GPIO5: "net.DPAD_DOWN",
          GPIO6: "net.DPAD_LEFT",
          GPIO7: "net.DPAD_RIGHT",
          GPIO8: "net.L1_BTN",
          GPIO9: "net.R1_BTN",
          GPIO10: "net.L2_BTN",
          GPIO11: "net.R2_BTN",
          GPIO12: "net.MENU_BTN",
          GPIO13: "net.VIEW_BTN",
          GPIO14: "net.STEAM_BTN",
          GPIO15: "net.QAM_BTN",
          GPIO26_ADC0: "net.JOY_L_X",
          GPIO27_ADC1: "net.JOY_L_Y",
          GPIO28_ADC2: "net.JOY_R_X",
          GPIO29_ADC3: "net.JOY_R_Y",
        }}
      />

      <pinheader
        name="J_JOY_L"
        pinCount={5}
        pitch="2.54mm"
        pcbX={-36}
        pcbY={0}
        schX={-13}
        schY={0}
        connections={{
          pin1: vdd,
          pin2: gnd,
          pin3: "net.JOY_L_X",
          pin4: "net.JOY_L_Y",
          pin5: "net.JOY_L_SW",
        }}
      />
      <pinheader
        name="J_JOY_R"
        pinCount={5}
        pitch="2.54mm"
        pcbX={36}
        pcbY={0}
        schX={13}
        schY={0}
        connections={{
          pin1: vdd,
          pin2: gnd,
          pin3: "net.JOY_R_X",
          pin4: "net.JOY_R_Y",
          pin5: "net.JOY_R_SW",
        }}
      />
      <pinheader
        name="J_BUTTONS"
        pinCount={12}
        pitch="2.54mm"
        pcbX={0}
        pcbY={-11.5}
        schX={0}
        schY={-12}
        connections={{
          pin1: "net.BTN_A",
          pin2: "net.BTN_B",
          pin3: "net.BTN_X",
          pin4: "net.BTN_Y",
          pin5: "net.DPAD_UP",
          pin6: "net.DPAD_DOWN",
          pin7: "net.DPAD_LEFT",
          pin8: "net.DPAD_RIGHT",
          pin9: "net.L1_BTN",
          pin10: "net.R1_BTN",
          pin11: "net.L2_BTN",
          pin12: "net.R2_BTN",
        }}
      />
      <pinheader
        name="J_SWD"
        pinCount={6}
        pitch="2.54mm"
        pcbX={0}
        pcbY={-18}
        schX={0}
        schY={12}
        connections={{
          pin1: vdd,
          pin2: "net.CTRL_SWD",
          pin3: gnd,
          pin4: "net.CTRL_SWCLK",
          pin5: "net.CTRL_RUN",
          pin6: gnd,
        }}
      />
    </group>
  )
}
