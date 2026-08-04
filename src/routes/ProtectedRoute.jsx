import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/ProductDetail";
import Categories from "../Pages/Categories";
const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/products/:id",
    element: <Product />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);

export default routes;
