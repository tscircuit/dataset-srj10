import { A_2199230_3 } from "../../imports/A_2199230_3"

interface M2MKeySocketProps {
  name?: string
  pcbX?: number | string
  pcbY?: number | string
  pcbRotation?: number | string
  schX?: number | string
  schY?: number | string
}

export const M2MKeySocket = (props: M2MKeySocketProps) => {
  return (
    <group
      name={props.name}
      pcbX={props.pcbX}
      pcbY={props.pcbY}
      pcbRotation={props.pcbRotation}
      schX={props.schX}
      schY={props.schY}
    >
      <A_2199230_3 name="J_NVME" pcbX={0} pcbY={0} schX={0} schY={0} />
    </group>
  )
}
