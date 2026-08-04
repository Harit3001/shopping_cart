import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const navigate = useNavigate();

  const { cart, totalPrice, totalQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        <h1>Your Cart is Empty</h1>

        <p>Looks like you haven't added any products yet.</p>

        <button onClick={() => navigate("/products")}>Continue Shopping</button>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-container">
        {/* LEFT */}

        <div className="cart-list">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* RIGHT */}

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>

            <strong>{totalQuantity}</strong>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>

            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>

            <strong>Free</strong>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>

            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed To Checkout
          </button>
        </aside>
      </div>
    </section>
  );
}
