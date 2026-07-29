import ProductList from "../components/ProductList";

export default function Home({ products, addToCart }) {
  return (
    <div className="home">
      <h1>Danh sách sản phẩm</h1>

      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}
