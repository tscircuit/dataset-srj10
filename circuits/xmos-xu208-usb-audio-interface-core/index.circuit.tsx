import type { ChipProps } from "tscircuit"
import { TYPE_C_31_M_12 } from "../../imports/TYPE_C_31_M_12"

const xu208PinLabels = {
  pin1: "X0D36",
  pin2: "X0D38",
  pin3: "VDDIOL_A",
  pin4: "X0D39",
  pin5: "X0D40",
  pin6: "X0D41",
  pin7: "X0D42",
  pin8: "X0D43",
  pin9: "VDD_1V0_A",
  pin10: "VDD_1V0_B",
  pin11: "X0D01",
  pin12: "X0D10",
  pin13: "VDDIOL_B",
  pin14: "X0D00",
  pin15: "X0D04",
  pin16: "X0D11",
  pin17: "X0D05",
  pin18: "X0D06",
  pin19: "X0D07",
  pin20: "VDD_1V0_C",
  pin21: "USB_ID",
  pin22: "USB_VDD33",
  pin23: "USB_VBUS",
  pin24: "USB_RTUNE",
  pin25: "USB_DP",
  pin26: "USB_DM",
  pin27: "USB_VDD_1V0",
  pin28: "X0D14",
  pin29: "X0D15",
  pin30: "X0D20",
  pin31: "VDD_1V0_D",
  pin32: "X0D21",
  pin33: "NC33",
  pin34: "VDDIOR_A",
  pin35: "X0D16",
  pin36: "X0D17",
  pin37: "X0D18",
  pin38: "X0D19",
  pin39: "VDD_1V0_E",
  pin40: "VDD_1V0_F",
  pin41: "VDD_1V0_G",
  pin42: "X0D35",
  pin43: "X0D26",
  pin44: "VDDIOR_B",
  pin45: "X0D27",
  pin46: "X0D32",
  pin47: "X0D28",
  pin48: "X0D33",
  pin49: "X0D29",
  pin50: "X0D30",
  pin51: "X0D31",
  pin52: "VDD_1V0_H",
  pin53: "PLL_AVDD",
  pin54: "PLL_AGND",
  pin55: "OTP_VCC",
  pin56: "VDD_1V0_I",
  pin57: "RST_N",
  pin58: "CLK",
  pin59: "VDD_1V0_J",
  pin60: "TMS",
  pin61: "TCK",
  pin62: "TDI",
  pin63: "TDO",
  pin64: "X0D37",
} as const

const qspiFlashPinLabels = {
  pin1: "CS_N",
  pin2: "DO_IO1",
  pin3: "WP_IO2",
  pin4: "GND",
  pin5: "DI_IO0",
  pin6: "CLK",
  pin7: "HOLD_IO3",
  pin8: "VCC",
} as const

const ldoPinLabels = {
  pin1: "VIN",
  pin2: "GND",
  pin3: "EN",
  pin4: "NC",
  pin5: "VOUT",
} as const

const oscillatorPinLabels = {
  pin1: "OE",
  pin4: "GND",
  pin5: "OUT",
  pin8: "VDD",
} as const

const XmosXu208 = (props: ChipProps<typeof xu208PinLabels>) => (
  <chip
    {...props}
    manufacturerPartNumber="XU208-256-TQ64"
    footprint="kicad:Package_QFP/TQFP-64_10x10mm_P0.5mm"
    pinLabels={xu208PinLabels}
  />
)

const QspiBootFlash = (props: ChipProps<typeof qspiFlashPinLabels>) => (
  <chip
    {...props}
    manufacturerPartNumber="W25Q64JV"
    footprint="kicad:Package_SO/SOIC-8_3.9x4.9mm_P1.27mm"
    pinLabels={qspiFlashPinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["CS_N", "DO_IO1", "WP_IO2", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "HOLD_IO3", "CLK", "DI_IO0"],
      },
    }}
  />
)

const LdoRegulator = (props: ChipProps<typeof ldoPinLabels>) => (
  <chip
    {...props}
    footprint="kicad:Package_TO_SOT_SMD/SOT-23-5"
    pinLabels={ldoPinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "EN", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VOUT"],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: ["NC"],
      },
    }}
  />
)

const ClockOscillator = (props: ChipProps<typeof oscillatorPinLabels>) => (
  <chip
    {...props}
    manufacturerPartNumber="SG-8002DC-24.0000M"
    footprint="kicad:Oscillator/Oscillator_SeikoEpson_SG-8002DC"
    pinLabels={oscillatorPinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["OE", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VDD", "OUT"],
      },
    }}
  />
)

export default () => (
  <board width="55mm" height="30mm" layers={4}>
    <TYPE_C_31_M_12 name="J1" pcbX={-24.1} pcbY={0} pcbRotation={270} schX={-17} schY={0} />

    <fuse
      name="F1"
      footprint="0603"
      currentRating="1A"
      voltageRating="24V"
      schX={-12}
      schY={8}
      pcbX={-19.1}
      pcbY={2.5}
    />
    <resistor
      name="R1"
      resistance="5.1k"
      footprint="0402"
      pcbX={-20.0}
      pcbY={-3.8}
      schX={-11}
      schY={-10}
    />
    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0402"
      pcbX={-20.3}
      pcbY={-7.9}
      schX={-11}
      schY={-12}
    />
    <capacitor
      name="C1"
      capacitance="2.2uF"
      footprint="0603"
      pcbX={-15.8}
      pcbY={-2.8}
      schX={-9}
      schY={4}
    />

    <LdoRegulator
      name="U2"
      manufacturerPartNumber="AP2112K-3.3"
      pcbX={-17.5}
      pcbY={8}
      schX={-6}
      schY={12}
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0805"
      pcbX={-20.5}
      pcbY={11.3}
      schX={-9}
      schY={14}
    />
    <capacitor
      name="C3"
      capacitance="22uF"
      footprint="0805"
      pcbX={-16.5}
      pcbY={11.3}
      schX={-3}
      schY={14}
    />

    <LdoRegulator
      name="U3"
      manufacturerPartNumber="TLV70010"
      pcbX={-12.8}
      pcbY={8}
      schX={0}
      schY={12}
    />
    <capacitor
      name="C4"
      capacitance="10uF"
      footprint="0805"
      pcbX={-12.5}
      pcbY={12}
      schX={-1}
      schY={14}
    />
    <capacitor
      name="C5"
      capacitance="22uF"
      footprint="0805"
      pcbX={-8.9}
      pcbY={7.6}
      schX={2}
      schY={14}
    />

    <XmosXu208 name="U1" pcbX={-1} pcbY={0} schX={0} schY={0} />
    <resistor
      name="R3"
      resistance="12k"
      footprint="0402"
      pcbX={5.8}
      pcbY={-12.8}
      schX={4}
      schY={-15}
    />
    <resistor
      name="R4"
      resistance="10k"
      footprint="0402"
      pcbX={11.8}
      pcbY={9.2}
      schX={6}
      schY={13}
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      pcbX={14.9}
      pcbY={9.2}
      schX={8}
      schY={13}
    />
    <resistor
      name="R5"
      resistance="2.2k"
      footprint="0402"
      pcbX={5}
      pcbY={7.8}
      schX={4}
      schY={17}
    />
    <resistor
      name="R6"
      resistance="2.2k"
      footprint="0402"
      pcbX={9}
      pcbY={7.8}
      schX={5}
      schY={17}
    />
    <resistor
      name="R7"
      resistance="0"
      footprint="0402"
      pcbX={9}
      pcbY={4.5}
      schX={2}
      schY={12}
    />

    <ClockOscillator name="Y1" pcbX={8.8} pcbY={-5.5} schX={6} schY={-9} />
    <capacitor
      name="C7"
      capacitance="100nF"
      footprint="0402"
      pcbX={15.8}
      pcbY={-14.2}
      schX={8}
      schY={-9}
    />

    <QspiBootFlash name="U4" pcbX={-8.9} pcbY={-8.6} schX={-5} schY={-12} />
    <capacitor
      name="C8"
      capacitance="100nF"
      footprint="0402"
      pcbX={-14.0}
      pcbY={-9.1}
      schX={-7}
      schY={-12}
    />

    <capacitor name="C9" capacitance="100nF" footprint="0402" pcbX={-8.6} pcbY={2.75} pcbRotation={180} schX={-2} schY={8} />
    <capacitor name="C10" capacitance="100nF" footprint="0402" pcbX={-1.25} pcbY={7.85} pcbRotation={90} schX={2} schY={8} />
    <capacitor name="C11" capacitance="100nF" footprint="0402" pcbX={-8.6} pcbY={-0.75} pcbRotation={180} schX={-2} schY={-8} />
    <capacitor name="C12" capacitance="100nF" footprint="0402" pcbX={2.25} pcbY={-7.85} pcbRotation={270} schX={2} schY={-8} />
    <capacitor name="C13" capacitance="4.7uF" footprint="0603" pcbX={-4} pcbY={7.7} pcbRotation={90} schX={0} schY={9} />
    <capacitor name="C14" capacitance="4.7uF" footprint="0603" pcbX={-2.25} pcbY={-8.15} pcbRotation={270} schX={0} schY={-9} />
    <capacitor name="C15" capacitance="100nF" footprint="0402" pcbX={1.5} pcbY={7.85} pcbRotation={90} schX={3} schY={9} />
    <capacitor name="C16" capacitance="100nF" footprint="0402" pcbX={6.8} pcbY={-3.4} schX={3} schY={8} />
    <capacitor name="C17" capacitance="100nF" footprint="0402" pcbX={6.6} pcbY={0.75} schX={3} schY={7} />

    <pinheader
      name="J2"
      pinCount={16}
      footprint="pinrow16_rows2"
      doubleRow
      gender="female"
      pitch="2.54mm"
      showSilkscreenPinLabels={false}
      pinLabels={[
        "V3_3",
        "GND",
        "MCLK",
        "BCLK",
        "LRCLK",
        "TDM_OUT",
        "TDM_IN",
        "I2C_SCL",
        "I2C_SDA",
        "CODEC_RESET_N",
        "GPIO_A",
        "GPIO_B",
        "GPIO_C",
        "GPIO_D",
        "SYNC_IN",
        "SYNC_OUT",
      ]}
      pcbX={0}
      pcbY={13}
      schX={0}
      schY={22}
    />

    <pinheader
      name="J3"
      pinCount={10}
      footprint="pinrow10_rows2"
      doubleRow
      gender="female"
      pitch="2.54mm"
      showSilkscreenPinLabels={false}
      pinLabels={[
        "V3_3",
        "GND",
        "MCLK",
        "BCLK",
        "LRCLK",
        "ADAT_TX",
        "ADAT_RX",
        "GPIO1",
        "GPIO2",
        "RESET_N",
      ]}
      pcbX={25.5}
      pcbY={-8}
      pcbRotation={270}
      schX={14}
      schY={-9}
    />

    <pinheader
      name="J4"
      pinCount={10}
      footprint="pinrow10_rows2"
      doubleRow
      gender="male"
      pitch="2.54mm"
      showSilkscreenPinLabels={false}
      pinLabels={[
        "V3_3",
        "GND",
        "TMS",
        "TCK",
        "TDI",
        "TDO",
        "RESET_N",
        "BOOT_MODE",
        "GPIO0",
        "GPIO1",
      ]}
      pcbX={25.5}
      pcbY={8}
      pcbRotation={270}
      schX={14}
      schY={11}
    />

    <trace from="J1.A4B9" to="F1.pin1" />
    <trace from="J1.B4A9" to="F1.pin1" />
    <trace from="F1.pin2" to="net.VBUS_5V" />
    <trace from="J1.A5" to="R1.pin1" />
    <trace from="R1.pin2" to="net.GND" />
    <trace from="J1.B5" to="R2.pin1" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="J1.A1B12" to="net.GND" />
    <trace from="J1.B1A12" to="net.GND" />
    <trace from="J1.EH1" to="net.GND" />
    <trace from="J1.EH2" to="net.GND" />
    <trace from="J1.EH3" to="net.GND" />
    <trace from="J1.EH4" to="net.GND" />
    <trace from="J1.A6" to="U1.USB_DP" />
    <trace from="J1.B6" to="U1.USB_DP" />
    <trace from="J1.A7" to="U1.USB_DM" />
    <trace from="J1.B7" to="U1.USB_DM" />
    <trace from="net.VBUS_5V" to="C1.pin1" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="net.VBUS_5V" to="U1.USB_VBUS" />
    <trace from="net.VBUS_5V" to="U2.VIN" />
    <trace from="net.VBUS_5V" to="U2.EN" />
    <trace from="net.VBUS_5V" to="C2.pin1" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.VOUT" to="net.V3_3" />
    <trace from="net.V3_3" to="C3.pin1" />
    <trace from="C3.pin2" to="net.GND" />

    <trace from="net.V3_3" to="U3.VIN" />
    <trace from="net.V3_3" to="U3.EN" />
    <trace from="net.V3_3" to="C4.pin1" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.VOUT" to="net.V1_0" />
    <trace from="net.V1_0" to="C5.pin1" />
    <trace from="C5.pin2" to="net.GND" />

    <trace from="U1.VDDIOL_A" to="net.V3_3" />
    <trace from="U1.VDDIOL_B" to="net.V3_3" />
    <trace from="U1.VDDIOR_A" to="net.V3_3" />
    <trace from="U1.VDDIOR_B" to="net.V3_3" />
    <trace from="U1.USB_VDD33" to="net.V3_3" />
    <trace from="U1.OTP_VCC" to="net.V3_3" />

    <trace from="U1.VDD_1V0_A" to="net.V1_0" />
    <trace from="U1.VDD_1V0_B" to="net.V1_0" />
    <trace from="U1.VDD_1V0_C" to="net.V1_0" />
    <trace from="U1.VDD_1V0_D" to="net.V1_0" />
    <trace from="U1.VDD_1V0_E" to="net.V1_0" />
    <trace from="U1.VDD_1V0_F" to="net.V1_0" />
    <trace from="U1.VDD_1V0_G" to="net.V1_0" />
    <trace from="U1.VDD_1V0_H" to="net.V1_0" />
    <trace from="U1.VDD_1V0_I" to="net.V1_0" />
    <trace from="U1.VDD_1V0_J" to="net.V1_0" />
    <trace from="U1.USB_VDD_1V0" to="net.V1_0" />
    <trace from="net.V1_0" to="R7.pin1" />
    <trace from="R7.pin2" to="net.V1_0_PLL" />
    <trace from="U1.PLL_AVDD" to="net.V1_0_PLL" />
    <trace from="U1.PLL_AGND" to="net.GND" />

    <trace from="net.V3_3" to="C9.pin1" />
    <trace from="C9.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C10.pin1" />
    <trace from="C10.pin2" to="net.GND" />
    <trace from="net.V1_0" to="C11.pin1" />
    <trace from="C11.pin2" to="net.GND" />
    <trace from="net.V1_0" to="C12.pin1" />
    <trace from="C12.pin2" to="net.GND" />
    <trace from="net.V1_0" to="C13.pin1" />
    <trace from="C13.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C14.pin1" />
    <trace from="C14.pin2" to="net.GND" />
    <trace from="net.V1_0_PLL" to="C15.pin1" />
    <trace from="C15.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C16.pin1" />
    <trace from="C16.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C17.pin1" />
    <trace from="C17.pin2" to="net.GND" />

    <trace from="U1.USB_RTUNE" to="R3.pin1" />
    <trace from="R3.pin2" to="net.GND" />

    <trace from="U1.RST_N" to="net.RESET_N" />
    <trace from="net.V3_3" to="R4.pin1" />
    <trace from="R4.pin2" to="net.RESET_N" />
    <trace from="net.RESET_N" to="C6.pin1" />
    <trace from="C6.pin2" to="net.GND" />

    <trace from="net.V3_3" to="Y1.VDD" />
    <trace from="Y1.GND" to="net.GND" />
    <trace from="net.V3_3" to="Y1.OE" />
    <trace from="Y1.OUT" to="U1.CLK" />
    <trace from="net.V3_3" to="C7.pin1" />
    <trace from="C7.pin2" to="net.GND" />

    <trace from="net.V3_3" to="U4.VCC" />
    <trace from="U4.GND" to="net.GND" />
    <trace from="net.V3_3" to="C8.pin1" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="U1.X0D01" to="U4.CS_N" />
    <trace from="U1.X0D04" to="U4.CLK" />
    <trace from="U1.X0D05" to="U4.DI_IO0" />
    <trace from="U1.X0D06" to="U4.DO_IO1" />
    <trace from="U1.X0D10" to="U4.WP_IO2" />
    <trace from="U1.X0D07" to="U4.HOLD_IO3" />

    <trace from="U1.X0D35" to="net.I2C_SDA" />
    <trace from="U1.X0D37" to="net.I2C_SCL" />
    <trace from="net.V3_3" to="R5.pin1" />
    <trace from="R5.pin2" to="net.I2C_SDA" />
    <trace from="net.V3_3" to="R6.pin1" />
    <trace from="R6.pin2" to="net.I2C_SCL" />

    <trace from="J2.V3_3" to="net.V3_3" />
    <trace from="J2.GND" to="net.GND" />
    <trace from="J2.MCLK" to="U1.X0D36" />
    <trace from="J2.BCLK" to="U1.X0D38" />
    <trace from="J2.LRCLK" to="U1.X0D39" />
    <trace from="J2.TDM_OUT" to="U1.X0D40" />
    <trace from="J2.TDM_IN" to="U1.X0D41" />
    <trace from="J2.I2C_SCL" to="net.I2C_SCL" />
    <trace from="J2.I2C_SDA" to="net.I2C_SDA" />
    <trace from="J2.CODEC_RESET_N" to="U1.X0D16" />
    <trace from="J2.GPIO_A" to="U1.X0D14" />
    <trace from="J2.GPIO_B" to="U1.X0D15" />
    <trace from="J2.GPIO_C" to="U1.X0D20" />
    <trace from="J2.GPIO_D" to="U1.X0D21" />
    <trace from="J2.SYNC_IN" to="U1.X0D26" />
    <trace from="J2.SYNC_OUT" to="U1.X0D27" />

    <trace from="J3.V3_3" to="net.V3_3" />
    <trace from="J3.GND" to="net.GND" />
    <trace from="J3.MCLK" to="U1.X0D36" />
    <trace from="J3.BCLK" to="U1.X0D38" />
    <trace from="J3.LRCLK" to="U1.X0D39" />
    <trace from="J3.ADAT_TX" to="U1.X0D42" />
    <trace from="J3.ADAT_RX" to="U1.X0D43" />
    <trace from="J3.GPIO1" to="U1.X0D17" />
    <trace from="J3.GPIO2" to="U1.X0D18" />
    <trace from="J3.RESET_N" to="net.RESET_N" />

    <trace from="J4.V3_3" to="net.V3_3" />
    <trace from="J4.GND" to="net.GND" />
    <trace from="J4.TMS" to="U1.TMS" />
    <trace from="J4.TCK" to="U1.TCK" />
    <trace from="J4.TDI" to="U1.TDI" />
    <trace from="J4.TDO" to="U1.TDO" />
    <trace from="J4.RESET_N" to="net.RESET_N" />
    <trace from="J4.BOOT_MODE" to="U1.X0D29" />
    <trace from="J4.GPIO0" to="U1.X0D30" />
    <trace from="J4.GPIO1" to="U1.X0D31" />
  </board>
)
