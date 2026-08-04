import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CheckOut from "../components/CheckOut";

export default function CheckOutPage() {
  const navigate = useNavigate();

  const { cart, totalPrice, clearCart } = useCart();

  function handleSubmit(customer) {
    console.log(customer);

    clearCart();

    navigate("/success");
  }

  return (
    <CheckOut
      cart={cart}
      totalPrice={totalPrice}
      onSubmit={handleSubmit}
      onCancel={() => navigate("/cart")}
    />
  );
}
