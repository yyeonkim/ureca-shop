import styles from "@/styles/Header.module.css";
import throttle from "@/utils/throttle.js";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

const linkClassName = ({ isActive }) => (isActive ? styles.active : "");

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleSize = throttle(() => {
    setIsOpen(false);
  }, 300);

  useEffect(() => {
    // 브라우저 주소가 바뀌면 사이드 네비게이션 닫기
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // 브라우저 크기가 달라지면 사이드 네비게이션 닫기
    window.addEventListener("resize", handleSize);
    return () => {
      setIsOpen(false);
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <header className={`mw ${styles.main}`}>
      <h1>
        <NavLink to="/" aria-label="홈으로 가기">
          <img src="/logo.svg" alt="SHOPPE" />
        </NavLink>
      </h1>

      <nav
        id="mainNavigation"
        className={`${styles.gnb} ${isOpen && styles.open}`}
        aria-expanded={isOpen}
      >
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
        {!isOpen && <span aria-hidden="true">|</span>}
        <NavLink className={linkClassName} to="/search" aria-label="검색페이지 가기">
          {isOpen ? "Search" : <i className="bi bi-search" />}
        </NavLink>
        {!isOpen && (
          <NavLink className={linkClassName} to="/cart" aria-label="장바구니 가기">
            <i className="bi bi-cart" />
          </NavLink>
        )}
        {isOpen && <hr aria-hidden="true" />}
        <NavLink className={linkClassName} to="/mypage" aria-label="마이페이지 가기">
          <i className={`bi bi-person ${styles.person}`} />
          {isOpen && <span>My account</span>}
        </NavLink>
      </nav>

      {isOpen ? (
        // 닫기 아이콘
        <i
          className="bi bi-x-lg"
          aria-label="메뉴 닫기"
          aria-controls="mainNavigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(false)}
        />
      ) : (
        // 햄버거 아이콘
        <i
          className={`bi bi-list ${styles.hamburger}`}
          aria-label="메뉴 열기"
          aria-controls="mainNavigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        />
      )}
    </header>
  );
}

export default Header;
