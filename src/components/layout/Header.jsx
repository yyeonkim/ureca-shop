import styles from "@/styles/Header.module.css";
import { Search, ShoppingCart, User } from "lucide-react";
import { NavLink } from "react-router";

function Header() {
  return (
    <header className={`mw ${styles.hd}`}>
      <nav>
        <h1>
          <NavLink to="/">
            <img src="/logo.svg" alt="SHOPPE" />
          </NavLink>
        </h1>

        <div>
          <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/shop">
            Shop
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/blog">
            Blog
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/about">
            Our Story
          </NavLink>
          <span>|</span>
          <NavLink to="#">
            <Search size={20} />
          </NavLink>
          <NavLink to="#">
            <ShoppingCart size={20} />
          </NavLink>
          <NavLink to="#">
            <User size={20} />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
