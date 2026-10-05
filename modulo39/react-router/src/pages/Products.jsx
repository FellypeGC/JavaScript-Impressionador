import { Link, useSearchParams } from "react-router"
import products from "../assets/data"

export const Products = () => {
  // const params = useSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  const filteredProducts = products.filter(product => {
    const filteredCategory = category ? product.category === category : "Todos";
    return filteredCategory;
  });

  const filterPerCategory = (category) => {
    const params = {};
    if (category) params.category = category;
    setSearchParams(params);
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>

      <span>Filtro por Categoria</span>
      <button onClick={() => filterPerCategory("eletrônico")}>Eletrônico</button>
      <button onClick={() => filterPerCategory("vestuário")}>Vestuário</button>
      <button onClick={() => filterPerCategory()}>Todos</button>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/*
useParams -> hook to catch dynamic params data from the URL
useSearchParams -> hook that returns an array with two elements:
  - searchParams - an object that represents the current params from the URL
  - setSearchParams - a function to update the search params

*/ 