import { Link, useParams, useNavigate } from "react-router";
import products from "../assets/data";

export const Details = () => {
  // const params = useParams();
  // console.log(params.id);
  const navigate = useNavigate();
  const { id } = useParams();

  if (id) {
    const product = products.find((product) => product.id === id);

    if (!product) {
      return (
        <div>
          <h1>Produto não encontrado</h1>
          <Link to="/products">Voltar Produtos</Link>
        </div>
      )
    }

    return (
      <div>
        <h1>Detalhes de Produto</h1>
        <h2>{product?.name}</h2>
        <p>Categoria: {product?.categoria}</p>
        <p>Preço: {product?.price}</p>
        <p>Descrição: {product?.description}</p>
        <br />

        <button onClick={() => navigate(`/products/${product?.id}/info`)}>Informações</button>
        <Link to="/products">Voltar Produtos</Link>
      </div>
    );
  }
};

// useParams -> hook to catch dynamic params data from the URL
// to-do: implement filters with useSearchParams