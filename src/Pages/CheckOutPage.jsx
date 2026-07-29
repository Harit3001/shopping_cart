import { useState } from "react";

export default function CheckOutPage({ totalPrice, onSubmit, onCancel }) {
  const [errors, setErrors] = useState({});

  function validate(form) {
    const newErrors = {};

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const address = form.address.value.trim();

    if (name.length < 2) {
      newErrors.name = "Họ tên phải có ít nhất 2 ký tự.";
    }

    if (!/^0\d{9}$/.test(phone)) {
      newErrors.phone = "Số điện thoại phải gồm 10 số và bắt đầu bằng 0.";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Email không đúng định dạng.";
    }

    if (address.length < 5) {
      newErrors.address = "Địa chỉ quá ngắn.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errors = validate(e.target);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setErrors({});

    const customer = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: e.target.address.value,
      note: e.target.note.value,
    };

    onSubmit(customer);
  }

  return (
    <div className="checkout-overlay">
      <div className="checkout-container">
        <h2>Thông tin đặt hàng</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Họ tên</label>
            <input type="text" name="name" />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Số điện thoại</label>
            <input type="text" name="phone" />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email" />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Địa chỉ</label>
            <input type="text" name="address" />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label>Ghi chú</label>
            <input type="text" name="note" />
          </div>

          <div className="checkout-total">
            Tổng tiền: ${totalPrice.toFixed(2)}
          </div>

          <div className="checkout-actions">
            <button type="submit">Xác nhận đặt hàng</button>

            <button type="button" onClick={onCancel}>
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
