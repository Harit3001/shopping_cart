import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import { products } from "../components/products.js";

export default function Home() {
  return (
    <>
      <Banner />

      <ProductList products={products} />
    </>
  );
}
