import { Link, useNavigate } from "react-router"

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
        <br />
        <button onClick={() => navigate(-1)}>Voltar</button>
      </nav>
    </header>
  )
}
