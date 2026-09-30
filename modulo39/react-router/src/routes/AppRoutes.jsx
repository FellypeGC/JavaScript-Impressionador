import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  )
}