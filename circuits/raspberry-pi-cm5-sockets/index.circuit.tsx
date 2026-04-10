import { RaspberryPiCm5Sockets } from "../../components/RaspberryPiCm5Sockets"

export default () => (
  <board width="65mm" height="50mm" routingDisabled>
    <RaspberryPiCm5Sockets name="CM5" pcbX={0} pcbY={0} schX={0} schY={0} />
  </board>
)
