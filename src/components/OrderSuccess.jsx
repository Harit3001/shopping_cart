export default function OrderSuccess({ order, onContinue }) {
  return (
    <div className="order-success">
      <div className="success-icon">🎉</div>

      <h1>Đặt hàng thành công!</h1>

      <p>Mã đơn hàng: #{order.id}</p>

      <h3>Tổng tiền: ${order.total.toFixed(2)}</h3>

      <p>Cảm ơn bạn đã mua hàng.</p>

      <button onClick={onContinue}>Tiếp tục mua</button>
    </div>
  );
}
