import { Link, useNavigate } from 'react-router'

export const Navigation = () => {
  // Active navigation function
  const navigate = useNavigate();

  // Function to advance
  const handleAdvance = () => {
    navigate(1);
  }

  return (
    <>
      <nav>
        <a href="https://google.com/" target="_blank" rel="noopener noreferrer">Google</a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
      </nav>
      <br />
      <br />

      <button onClick={() => navigate('/')}>Voltar para página Home</button>
      <button onClick={() => navigate(-1)}>Página Anterior</button>
      <button onClick={() => handleAdvance()}>Avançar</button>
    </>
  )
}

// useNavigate()