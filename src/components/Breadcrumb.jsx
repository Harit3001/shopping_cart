import { Link } from "react-router-dom";

export default function Breadcrumb({ product }) {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>

      <span>/</span>

      <Link to="/products">Products</Link>

      <span>/</span>

      <span className="active">{product.name}</span>
    </div>
  );
}
