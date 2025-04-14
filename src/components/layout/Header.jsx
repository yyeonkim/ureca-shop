import styles from "@/styles/Header.module.css";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import throttle from "../../utils/throttle.js";

const linkClassName = ({ isActive }) => (isActive ? styles.active : "");

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 브라우저 주소가 바뀌면 사이드 네비게이션 닫기
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // 브라우저 크기가 달라지면 사이드 네비게이션 닫기
    window.addEventListener(
      "resize",
      throttle(() => {
        setIsOpen(false);
      }, 300)
    );
    return () => {
      setIsOpen(false);
      window.removeEventListener("resize");
    };
  }, []);

  return (
    <header className={`mw ${styles.main}`}>
      <h1>
        <NavLink to="/">
          <img src="/logo.svg" alt="SHOPPE" />
        </NavLink>
      </h1>

      <nav className={`${styles.gnb} ${isOpen && styles.open}`}>
        {isOpen && (
          <NavLink className={linkClassName} to="/">
            Home
          </NavLink>
        )}
        <NavLink className={linkClassName} to="/shop">
          Shop
        </NavLink>
        <NavLink className={linkClassName} to="/blog">
          Blog
        </NavLink>
        <NavLink className={linkClassName} to="/about">
          {isOpen ? "About" : "Our Story"}
        </NavLink>
        {!isOpen && <span>|</span>}
        <NavLink className={linkClassName} to="/search">
          {isOpen ? "Search" : <i class="bi bi-search" />}
        </NavLink>
        {!isOpen && (
          <NavLink className={linkClassName} to="/cart">
            <i class="bi bi-cart" />
          </NavLink>
        )}
        {isOpen && <hr />}
        <NavLink className={linkClassName} to="/mypage">
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
