import { useState } from "react";
import "./App.css";

import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { products } from "./components/products";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import CheckOutPage from "./Pages/CheckOutPage";
import OrderSuccess from "./components/OrderSuccess";

function App() {
  const [keyword, setKeyword] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [order, setOrder] = useState(null);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
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
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function increaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeItem(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }
  function handleOrder(customer) {
    const newOrder = {
      id: Date.now(),
      customer,
      items: cart,
      total: totalPrice,
    };

    setOrder(newOrder);

    setCart([]);

    setShowCheckout(false);

    setShowCart(false);
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
          openCheckout={() => {
            console.log("Đã mở checkout");
            setShowCart(false);
            setShowCheckout(true);
          }}
          totalPrice={totalPrice}
        />
      )}

      {showCheckout && (
        <CheckOutPage
          totalPrice={totalPrice}
          onSubmit={handleOrder}
          onCancel={() => setShowCheckout(false)}
        />
      )}

      {order && (
        <div className="success-overlay">
          <div className="success-modal">
            <OrderSuccess
              order={order}
              onContinue={() => {
                setOrder(null);
                setShowCart(false);
                setShowCheckout(false);
              }}
            />
          </div>
        </div>
      )}

      {showModal && (
        <Modal
          title="Xác nhận đặt hàng"
          onClose={() => setShowModal(false)}
          onConfirm={handleOrder}
        >
          <p>Bạn có chắc muốn đặt hàng?</p>

          <p>Tổng tiền: ${totalPrice}</p>
        </Modal>
      )}
    </>
  );
}

export default App;
