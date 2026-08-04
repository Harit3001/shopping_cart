import ProductList from "../components/ProductList";
import { products } from "../components/products";

export default function Products() {
  return (
    <main className="products-page">
      <ProductList products={products} />
    </main>
  );
}
