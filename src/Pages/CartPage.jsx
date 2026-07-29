import Cart from "../components/Cart";

export default function CartPage({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  totalPrice,
  goCheckout,
}) {
  return (
    <div className="cart-page">
      <h1>Giỏ hàng</h1>

      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
        openCheckout={goCheckout}
        totalPrice={totalPrice}
      />
    </div>
  );
}
