import { Link } from "react-router-dom";

const categories = [
  { name: "iPhone", slug: "iphone" },
  { name: "MacBook", slug: "macbook" },
  { name: "Apple Watch", slug: "watch" },
  { name: "Headphone", slug: "headphone" },
];

export default function Categories() {
  return (
    <div className="categories">
      <button className="categories-btn">Categories ▾</button>
      <div className="categories-dropdown">
        {categories.map((item) => (
          <Link key={item.slug} to={`/category/${item.slug}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
