import { useState } from "react";

export default function CheckOut({ cart, totalPrice, handleOrder }) {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitOrder(e) {
    e.preventDefault();

    // Validation
    if (!customer.name.trim()) {
      alert("Vui lòng nhập họ tên");
      return;
    }

    if (!customer.phone.trim()) {
      alert("Vui lòng nhập số điện thoại");
      return;
    }

    if (!customer.email.trim()) {
      alert("Vui lòng nhập email");
      return;
    }

    if (!customer.address.trim()) {
      alert("Vui lòng nhập địa chỉ");
      return;
    }

    if (cart.length === 0) {
      alert("Giỏ hàng đang trống");
      return;
    }

    handleOrder(customer);
  }

  return (
    <div className="checkout">
      <h1>Thông tin khách hàng</h1>

      <form onSubmit={submitOrder}>
        <div>
          <label>Họ và tên</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            placeholder="Nhập họ tên"
          />
        </div>

        <div>
          <label>Số điện thoại</label>
          <input
            type="tel"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            placeholder="Nhập số điện thoại"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            placeholder="Nhập email"
          />
        </div>

        <div>
          <label>Địa chỉ</label>
          <input
            type="text"
            name="address"
            value={customer.address}
            onChange={handleChange}
            placeholder="Nhập địa chỉ"
          />
        </div>

        <div>
          <label>Ghi chú</label>
          <textarea
            name="note"
            value={customer.note}
            onChange={handleChange}
            placeholder="Ghi chú cho đơn hàng"
          />
        </div>

        <hr />

        <h2>Sản phẩm đã chọn</h2>

        {cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name}x {item.quantity}
            </p>

            <span>${item.price * item.quantity}</span>
          </div>
        ))}

        <h2>Tổng tiền: ${totalPrice}</h2>

        <button type="submit">Xác nhận đặt hàng</button>
      </form>
    </div>
  );
}
