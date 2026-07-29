import CartItem from "./CartItem";

export default function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  openCheckout,
}) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Total Items</span>
              <strong>{totalQuantity}</strong>
            </div>

            <div className="summary-row">
              <span>Total Price</span>
              <strong className="cart-total">${totalPrice.toFixed(2)}</strong>
            </div>

            <button className="checkout-btn" onClick={openCheckout}>
              🛍️ Đặt hàng
            </button>
          </div>
        </>
      )}
    </div>
  );
}
