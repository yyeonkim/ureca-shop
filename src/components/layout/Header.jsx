import styles from "@/styles/Header.module.css";
import throttle from "@/utils/throttle.js";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

const linkClassName = ({ isActive }) => (isActive ? styles.active : "");

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 브라우저 주소가 바뀌면 사이드 네비게이션 닫기
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleSize = throttle(() => {
      setIsOpen(false);
    }, 300);

    // 브라우저 크기가 달라지면 사이드 네비게이션 닫기
    window.addEventListener("resize", handleSize);
    return () => {
      setIsOpen(false);
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  useEffect(() => {
    // 스크롤 제어
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [isOpen]);

  return (
    <header className={`${styles.hd} ${location.pathname === "/" ? "" : styles.hr} mw`}>
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
        {isOpen && <MainNavLink to="/">Home</MainNavLink>}
        <MainNavLink to="/shop">Shop</MainNavLink>
        <MainNavLink to="/blog">Blog</MainNavLink>
        <MainNavLink to="/about"> {isOpen ? "About" : "Our Story"}</MainNavLink>
        {!isOpen && <span aria-hidden="true">|</span>}
        <MainNavLink to="/search" aria-label="검색페이지 가기">
          {isOpen ? "Search" : <i className="bi bi-search" />}
        </MainNavLink>

        {!isOpen && (
          <MainNavLink to="/cart" aria-label="장바구니 가기">
            <i className="bi bi-cart" />
          </MainNavLink>
        )}
        {isOpen && <hr aria-hidden="true" />}
        <MainNavLink to="/mypage" aria-label="마이페이지 가기">
          <i className={`bi bi-person ${styles.person}`} />
          {isOpen && <span>My account</span>}
        </MainNavLink>
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

function MainNavLink({ children, ...restProps }) {
  return (
    <NavLink className={linkClassName} {...restProps}>
      {children}
    </NavLink>
  );
}

export default Header;
