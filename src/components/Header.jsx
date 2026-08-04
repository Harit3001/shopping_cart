import logo from "../assets/shoppy.jpg";
import Search from "./Search";
import Categories from "./Categories";

import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalQuantity } = useCart();

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header>
      <div className="header-top">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>

        <nav>
          <ul>
            {menus.map((menu) => (
              <li key={menu.name}>
                <NavLink to={menu.path}>{menu.name}</NavLink>
              </li>
            ))}

            <li>
              <Categories />
            </li>
          </ul>
        </nav>

        <Search />

        <NavLink className="cart-btn" to="/cart">
          🛒 {totalQuantity}
        </NavLink>
      </div>
    </header>
  );
}
