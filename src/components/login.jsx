import { useParams } from "react-router-dom"

export default function Order() {
  let params = useParams()
  return <h2>Order: {params.orderId}</h2>
}