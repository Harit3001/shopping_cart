import { CartProvider } from "./context/CartContext";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/CartPage";
import Checkout from "./Pages/CheckOutPage";
import Success from "./Pages/Succes.jsx";
import Login from "./Pages/LoginPage.jsx";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Categories from "./Pages/CategoriesPage.jsx";
export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route index element={<Login />} />

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:category" element={<Categories />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}
