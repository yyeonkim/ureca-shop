import styles from "@/styles/Header.module.css";
import { useState } from "react";
import { NavLink } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const textLinkClassName = ({ isActive }) =>
    (isActive ? styles.active : "") + ` ${!isOpen && "h5"}`;

  const IconLinkClassName = ({ isActive }) =>
    (isActive ? styles.active : "") + ` ${!isOpen && "h5"}`;

  return (
    <header className={`mw ${styles.main}`}>
      <h1>
        <NavLink to="/">
          <img src="/logo.svg" alt="SHOPPE" />
        </NavLink>
      </h1>

      <nav className={`${styles.gnb} ${isOpen && styles.open}`}>
        {isOpen && (
          <NavLink className={textLinkClassName} to="/">
            Home
          </NavLink>
        )}
        <NavLink className={textLinkClassName} to="/shop">
          Shop
        </NavLink>
        <NavLink className={textLinkClassName} to="/blog">
          Blog
        </NavLink>
        <NavLink className={textLinkClassName} to="/about">
          {isOpen ? "About" : "Our Story"}
        </NavLink>
        {!isOpen && <span>|</span>}
        <NavLink className={IconLinkClassName} to="/search">
          {isOpen ? "Search" : <i class="bi bi-search" />}
        </NavLink>
        {!isOpen && (
          <NavLink className={IconLinkClassName} to="/cart">
            <i class="bi bi-cart" />
          </NavLink>
        )}
        {isOpen && <hr />}
        <NavLink className={IconLinkClassName} to="/mypage">
          <i class={`bi bi-person ${styles.person}`} />
          {isOpen && <span>My account</span>}
        </NavLink>
      </nav>

      {isOpen ? (
        // 닫기 아이콘
        <i class="bi bi-x-lg" onClick={() => setIsOpen(false)} />
      ) : (
        // 햄버거 아이콘
        <i class={`bi bi-list ${styles.hamburger}`} onClick={() => setIsOpen(true)} />
      )}
    </header>
  );
}

export default Header;
