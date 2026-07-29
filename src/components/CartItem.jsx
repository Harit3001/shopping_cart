export default function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  return (
    <div className="cart-item">
      <div className="cart-info">
        <img src={item.image} alt={item.name} />

        <div>
          <h4>{item.name}</h4>
          <p>${item.price}</p>
        </div>
      </div>

      <div className="cart-actions">
        <button onClick={() => decreaseQuantity(item.id)}>−</button>

        <span>{item.quantity}</span>

        <button onClick={() => increaseQuantity(item.id)}>+</button>

        <button className="remove-btn" onClick={() => removeItem(item.id)}>
          🗑
        </button>
      </div>
    </div>
  );
}
