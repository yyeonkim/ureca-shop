import styles from "@/styles/Header.module.css";
import { NavLink } from "react-router";

const navLinkClassName = ({ isActive }) => (isActive ? styles.active : "");

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
          <NavLink className={navLinkClassName + " h5"} to="/shop">
            Shop
          </NavLink>
          <NavLink className={navLinkClassName + " h5"} to="/blog">
            Blog
          </NavLink>
          <NavLink className={navLinkClassName + " h5"} to="/about">
            Our Story
          </NavLink>
          <span>|</span>
          <NavLink className={navLinkClassName} to="/search">
            <i class="bi bi-search"></i>
          </NavLink>
          <NavLink className={navLinkClassName} to="/cart">
            <i class="bi bi-cart"></i>
          </NavLink>
          <NavLink className={navLinkClassName} to="/mypage">
            <i class="bi bi-person"></i>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
