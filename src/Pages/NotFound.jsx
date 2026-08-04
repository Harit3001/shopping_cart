import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>

      <p>Không tìm thấy trang.</p>

      <Link to="/">Quay về Trang chủ</Link>
    </div>
  );
}
