import { Link, useNavigate } from 'react-router'

export const Navigation = () => {
  const routes = ['/', '/about', '/contact', '/products'];
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0);

  // Active navigation function
  const navigate = useNavigate();

  // Function to go back
  const handleGoBack = () => {
    if (currentRouteIndex > 0) {
      const newRouteIndex = currentRouteIndex - 1;
      setCurrentRouteIndex(newRouteIndex);
      navigate(routes[newRouteIndex]); // 3 element with index 2
    }
  }

  // Function to advance
  const handleAdvance = () => {
    if (currentRouteIndex < routes.length - 1) {
      const newRouteIndex = currentRouteIndex + 1; // 2
      setCurrentRouteIndex(newRouteIndex);
      navigate(routes[newRouteIndex]); // 3 element with index 2
    }
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
      <button onClick={handleGoBack} disabled={currentRouteIndex <= 0}>Página Anterior</button>
      <button onClick={() => handleAdvance} disabled={currentRouteIndex >= routes.length - 1}>Avançar</button>
    </>
  )
}

// useNavigate()