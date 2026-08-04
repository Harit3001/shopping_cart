import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <section className="success-page">
      <div className="success-card">
        <FaCheckCircle className="success-icon" />

        <h1>Order Successful!</h1>

        <p>
          Thank you for shopping with us.
          <br />
          Your order has been placed successfully.
        </p>

        <button onClick={() => navigate("/products")}>Continue Shopping</button>
      </div>
    </section>
  );
}
