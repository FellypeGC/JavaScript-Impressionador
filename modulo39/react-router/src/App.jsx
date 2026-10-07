import "./global.css"
import { AppRoutes } from "./routes/AppRoutes"
import { Navigation } from "./components/Navigation"

export const App = () => {
  return (
    <>
      <Navigation />
      <AppRoutes />
    </>
  )
}
