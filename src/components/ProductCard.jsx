import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function ProductCard({ product, addToCart }) {
  function Rating({ rating }) {
    return (
      <div className="rating">
        {Array.from({ length: 5 }, (_, index) => {
          if (rating >= index + 1) {
            return <FaStar key={index} />;
          } else if (rating >= index + 0.5) {
            return <FaStarHalfAlt key={index} />;
          } else {
            return <FaRegStar key={index} />;
          }
        })}
      </div>
    );
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <div className="product-rating">
        <span>Rating:</span>
        <Rating rating={product.rating} />
      </div>

      <h4>${product.price}</h4>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
