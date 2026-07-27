import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { products } from "./components/products";
import Cart from "./components/Cart";
function App() {
  const [keyword, setKeyword] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  function toggleCart() {
    setShowCart((prev) => !prev);
  }

  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function increaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }
  function decreaseQuantity(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }
  function removeItem(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }
  return (
    <>
      <Header
        keyword={keyword}
        setKeyword={setKeyword}
        cart={cart}
        toggleCart={toggleCart}
      />
      <Banner />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      {showCart && (
        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      )}
    </>
  );
}

export default App;
