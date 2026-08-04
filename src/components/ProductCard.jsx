import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Rating from "./Rating";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const cardRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  function handleAddCart(e) {
    e.preventDefault();
    addToCart(product);
  }

  return (
    <div ref={cardRef} className={`product-card ${show ? "show" : ""}`}>
      <Link to={`/products/${product.id}`}>
        <div className="product-image">
          <img
            src={product.image || product.images?.[0]}
            alt={product.name}
            loading="lazy"
          />

          <span className="product-category">{product.category}</span>
        </div>
      </Link>

      <div className="product-content">
        <h3>{product.name}</h3>

        <div className="product-rating">
          <Rating rating={product.rating} />
          <span>{product.rating}/5</span>
        </div>

        <div className="product-footer">
          <h4>${product.price}</h4>

          <button onClick={handleAddCart}>Add Cart</button>
        </div>
      </div>
    </div>
  );
}
