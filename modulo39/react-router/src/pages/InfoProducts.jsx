import { useParams } from 'react-router'
import products from "../assets/data"

export const InfoProducts = () => {
  const { id } = useParams();

  const product = products.find(item => item.id === id);

  if (!product) {
    return <p>Product not found.</p>
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  )
}
