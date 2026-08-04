import { useParams } from "react-router-dom";
import { products } from "../components/products";
import ProductCard from "../components/ProductCard";

export default function CategoriesPage() {
  const { category } = useParams();

  const list = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );

  return (
    <div className="product-page">
      <section className="product-list">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
