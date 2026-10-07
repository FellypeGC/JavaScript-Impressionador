import { useRoutes, Route } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";
import { Details } from "../pages/Details";
import { Layout } from "../pages/Layout";

export const JsRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <Details /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};
