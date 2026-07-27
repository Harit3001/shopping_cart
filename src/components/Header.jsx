import logo from "../assets/shoppy.jpg";
import Search from "./Search";

export default function Header({ keyword, setKeyword, cart, toggleCart }) {
  const menus = ["Home", "Products", "Categories", "About", "Contact"];

  return (
    <header>
      <div className="header-top">
        <img src={logo} alt="logo" />

        <nav>
          <ul>
            {menus.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-search">
          <Search keyword={keyword} setKeyword={setKeyword} />
        </div>

        <button className="cart-btn" onClick={toggleCart}>
          🛒 {cart.length}
        </button>
      </div>
    </header>
  );
}
