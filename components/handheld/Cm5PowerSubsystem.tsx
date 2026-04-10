import { BQ25792RQMR } from "../../imports/BQ25792RQMR"
import { HUSB238A_BB001_QN16R } from "../../imports/HUSB238A_BB001_QN16R"
import { MAX17048G_T10 } from "../../imports/MAX17048G_T10"
import { TYPE_C_31_M_12 } from "../../imports/TYPE_C_31_M_12"

interface Cm5PowerSubsystemProps {
  name?: string
  pcbX?: number | string
  pcbY?: number | string
  pcbRotation?: number | string
  schX?: number | string
  schY?: number | string
}

export const Cm5PowerSubsystem = (props: Cm5PowerSubsystemProps) => {
  const gnd = "net.GND"
  const vbus = "net.VBUS_IN"
  const battery = "net.BATTERY"
  const system = "net.SYS_PWR"
  const usbDp = "net.USB_DP"
  const usbDm = "net.USB_DM"
  const cc1 = "net.USB_CC1"
  const cc2 = "net.USB_CC2"
  const i2cScl = "net.PWR_I2C_SCL"
  const i2cSda = "net.PWR_I2C_SDA"
  const rail3v3 = "net.PWR_3V3"

  return (
    <group
      name={props.name}
      pcbX={props.pcbX}
      pcbY={props.pcbY}
      pcbRotation={props.pcbRotation}
      schX={props.schX}
      schY={props.schY}
    >
      <TYPE_C_31_M_12
        name="J_USB"
        pcbX={16}
        pcbY={0}
        pcbRotation={270}
        schX={-10}
        schY={0}
        connections={{
          A4B9: vbus,
          B4A9: vbus,
          A5: cc1,
          B5: cc2,
          A6: usbDp,
          B6: usbDp,
          A7: usbDm,
          B7: usbDm,
          A1B12: gnd,
          B1A12: gnd,
          EH1: gnd,
          EH2: gnd,
          EH3: gnd,
          EH4: gnd,
        }}
      />

      <HUSB238A_BB001_QN16R
        name="U_PD"
        pcbX={6.5}
        pcbY={0}
        schX={0}
        schY={-2}
        connections={{
          VBUS: vbus,
          CC1: cc1,
          CC2: cc2,
          D_POS: usbDp,
          D_NEG: usbDm,
          VDD: rail3v3,
          GND: gnd,
          EN_N: gnd,
        }}
      />

      <BQ25792RQMR
        name="U_CHG"
        pcbX={-2}
        pcbY={0}
        schX={8}
        schY={0}
        connections={{
          VBUS1: vbus,
          VBUS2: vbus,
          D_POS: usbDp,
          D_NEG: usbDm,
          BATP: battery,
          BAT1: battery,
          BAT2: battery,
          SYS: system,
          SCL: i2cScl,
          SDA: i2cSda,
          GND: gnd,
        }}
      />

      <MAX17048G_T10
        name="U_FG"
        pcbX={-10.5}
        pcbY={0}
        schX={14}
        schY={0}
        connections={{
          CELL: battery,
          VDD: battery,
          GND: gnd,
          SCL: i2cScl,
          SDA: i2cSda,
        }}
      />

      <pinheader
        name="J_BAT"
        pinCount={2}
        pitch="2mm"
        pcbX={-18}
        pcbY={0}
        schX={19}
        schY={0}
        connections={{
          pin1: battery,
          pin2: gnd,
        }}
      />

      <pinheader
        name="J_PWR"
        pinCount={4}
        pitch="2.54mm"
        pcbX={-9}
        pcbY={7.5}
        pcbRotation={90}
        schX={14}
        schY={8}
        connections={{
          pin1: system,
          pin2: gnd,
          pin3: i2cScl,
          pin4: i2cSda,
        }}
      />
    </group>
  )
}
