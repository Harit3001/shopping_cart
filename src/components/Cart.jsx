import CartItem from "./CartItem";

export default function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItem={removeItem}
            />
          ))}

          <hr />

          <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}
