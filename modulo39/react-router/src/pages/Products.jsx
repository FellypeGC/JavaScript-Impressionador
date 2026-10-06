import { Link, useSearchParams } from "react-router"
import products from "../assets/data"

export const Products = () => {
  // const params = useSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  const price = searchParams.get("price");

  const filteredProducts = products.filter(product => {
    const filteredCategory = category ? product.category === category : "Todos";
    const filteredPrice = price ? product.price <= price : true;

    return filteredCategory && filteredPrice;
  });

  const filterByCategory = (category) => {
    const params = {};
    if (category) params.category = category;
    if (price) params.price = price;
    setSearchParams(params);
  }

  const filterByPrice = (price) => {
    const params = {};
    if (price) params.price = price;
    if (category) params.category = category;
    setSearchParams(params);
  }

  const allProducts = () => {
    setSearchParams({});
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>

      <span>Filtro por Categoria</span>
      <button onClick={() => filterByCategory("eletrônico")}>Eletrônico</button>
      <button onClick={() => filterByCategory("vestuário")}>Vestuário</button>
      <button onClick={() => allProducts()}>Todos</button>
      <hr />
      <span>Filtro por Preço</span>
      <button onClick={() => filterByPrice(4000)}>Até 4000 reais</button>
      <button onClick={() => filterByPrice(200)}>Até 200 reais</button>
      <button onClick={() => filterByPrice(150)}>Até 150 reais</button>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name} - {product.price}</Link>
          </li>
        ))}

        {filteredProducts.length === 0 && <p>Nenhum produto encontrado.</p>}
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