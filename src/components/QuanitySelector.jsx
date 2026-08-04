export default function QuantitySelector({ quantity, increase, decrease }) {
  return (
    <div className="quantity-selector">
      <button type="button" className="qty-btn" onClick={decrease}>
        −
      </button>

      <span className="qty-value">{quantity}</span>

      <button type="button" className="qty-btn" onClick={increase}>
        +
      </button>
    </div>
  );
}
