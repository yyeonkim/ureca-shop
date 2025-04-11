import styles from "@/styles/Header.module.css";
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
          <NavLink>장바구니</NavLink>
          <NavLink>마이페이지</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
