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
          <h5>
            <NavLink className={navLinkClassName} to="/shop">
              Shop
            </NavLink>
          </h5>
          <h5>
            <NavLink className={navLinkClassName} to="/blog">
              Blog
            </NavLink>
          </h5>
          <h5>
            <NavLink className={navLinkClassName} to="/about">
              Our Story
            </NavLink>
          </h5>
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
