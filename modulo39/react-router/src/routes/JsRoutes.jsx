import { useRoutes } from "react-router";
import { Layout } from "../pages/Layout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";
import { Details } from "../pages/Details";
import { InfoProducts } from "../pages/InfoProducts";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";

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
        { path: "products/:id/info", element: <InfoProducts /> },
      ],
    },
    { path: "/login/", element: <Login /> },
    // Private route
    {
      path: "/admin",
      element: (
        <PrivateRoute>
          <Admin />
        </PrivateRoute>
      ),
    },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};
