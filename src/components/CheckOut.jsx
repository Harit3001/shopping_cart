import { useState } from "react";

export default function CheckOut({ cart, totalPrice, onSubmit, onCancel }) {
  const [errors, setErrors] = useState({});

  function validate(form) {
    const errors = {};

    if (form.name.value.trim().length < 2) {
      errors.name = "Please enter your name.";
    }

    if (!/^0\d{9}$/.test(form.phone.value)) {
      errors.phone = "Invalid phone number.";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.value)) {
      errors.email = "Invalid email.";
    }

    if (form.address.value.trim().length < 5) {
      errors.address = "Please enter your address.";
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errors = validate(e.target);

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    setErrors({});

    onSubmit({
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: e.target.address.value,
      note: e.target.note.value,
    });
  }

  return (
    <section className="checkout-page">
      <form className="checkout-grid" onSubmit={handleSubmit}>
        {/* LEFT */}

        <div className="checkout-form">
          <h1>Checkout</h1>

          <div className="form-group">
            <label>Full Name</label>

            <input name="name" type="text" />

            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input name="phone" type="text" />

            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>

            <input name="email" type="text" />

            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Address</label>

            <input name="address" type="text" />

            {errors.address && <span className="error">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label>Note</label>

            <textarea rows="5" name="note" />
          </div>
        </div>

        {/* RIGHT */}

        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div className="summary-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>

                <p>Qty: {item.quantity}</p>
              </div>

              <strong>${(item.quantity * item.price).toFixed(2)}</strong>
            </div>
          ))}

          <hr />

          <div className="summary-total">
            <span>Total</span>

            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <button type="submit">Place Order</button>

          <button type="button" className="cancel-btn" onClick={onCancel}>
            Back To Cart
          </button>
        </aside>
      </form>
    </section>
  );
}
