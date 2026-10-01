import { Link } from "react-router"

const products = [
  { id: "1", name: "Notebook Gamer" },
  { id: "2", name: "Mouse Óptico" },
  { id: "3", name: "Teclado Mecânico" },
]

export const Products = () => {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to="/products">{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
