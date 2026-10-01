import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about" index element={<About />} />
      <Route path="/contact" index element={<Contact />} />
    </Routes>
  )
}