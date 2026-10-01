import "./global.css"
import { AppRoutes } from "./routes/AppRoutes"
import { Link } from "react-router"

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <AppRoutes />
    </>
  )
}
