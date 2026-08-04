import { useCart } from "../context/CartContext";
export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-info">
        <h3>{item.name}</h3>

        <p className="price">${item.price}</p>

        <span className="stock">In Stock</span>
      </div>

      <div className="cart-actions">
        <button onClick={() => decreaseQuantity(item.id)}>-</button>

        <span>{item.quantity}</span>

        <button onClick={() => increaseQuantity(item.id)}>+</button>
      </div>

      <div className="cart-subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </div>

      <button className="remove-btn" onClick={() => removeItem(item.id)}>
        🗑
      </button>
    </div>
  );
}
