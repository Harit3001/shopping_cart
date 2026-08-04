import ProductCard from "./ProductCard";

export default function RelatedProducts({ currentProduct, products }) {
  const related = products.filter(
    (item) =>
      item.category === currentProduct.category &&
      item.id !== currentProduct.id,
  );

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="related-products">
      <h2>You May Also Like</h2>

      <div className="product-list">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
