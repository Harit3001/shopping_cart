export default function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  return (
    <div className="cart-item">
      <div>
        <h4>{item.name}</h4>

        <p>${item.price}</p>

        <p>Quantity: {item.quantity}</p>
      </div>

      <div className="cart-actions">
        <button onClick={() => decreaseQuantity(item.id)}>-</button>

        <button onClick={() => increaseQuantity(item.id)}>+</button>

        <button onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
}
