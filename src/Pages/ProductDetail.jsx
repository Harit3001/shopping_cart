import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { products } from "../components/products";
import { useCart } from "../context/CartContext";
import RelatedProducts from "../components/RelatedProducts";
import Rating from "../components/Rating";
import QuantitySelector from "../components/QuanitySelector";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>
        <Link to="/">← Back Home</Link>
      </div>
    );
  }

  const increase = () => {
    if (quantity < product.stock) {
      setQuantity((q) => q + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  const handleAddCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="product-detail-page">
      <Breadcrumb product={product} />

      <section className="product-detail">
        <RelatedProducts currentProduct={product} products={products} />

        <div className="detail-left">
          <div className="main-image">
            <img src={product.images[currentImage]} alt={product.name} />
          </div>

          <div className="thumbnail-list">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={currentImage === index ? "active" : ""}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="detail-right">
          <div className="badge-group">
            <span className="badge category">{product.category}</span>

            <span className="badge brand">{product.brand}</span>
          </div>

          <h1>{product.name}</h1>

          <Rating rating={product.rating} />

          <h2>${product.price}</h2>

          <div className="detail-info">
            <p>
              <strong>Brand</strong>
              <span>{product.brand}</span>
            </p>

            <p>
              <strong>Color</strong>
              <span>{product.color}</span>
            </p>

            <p>
              <strong>Stock</strong>
              <span>{product.stock} Available</span>
            </p>
          </div>

          <p className="description">{product.description}</p>

          <QuantitySelector
            quantity={quantity}
            increase={increase}
            decrease={decrease}
          />

          <button className="add-cart-btn" onClick={handleAddCart}>
            Add To Cart
          </button>
        </div>
      </section>
    </div>
  );
}
