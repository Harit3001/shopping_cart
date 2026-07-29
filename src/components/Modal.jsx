export default function Modal({ title, children, onClose, onConfirm }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>

        <div className="modal-content">{children}</div>

        <div className="modal-buttons">
          <button onClick={onClose}>Hủy</button>

          <button onClick={onConfirm}>Đồng ý</button>
        </div>
      </div>
    </div>
  );
}
