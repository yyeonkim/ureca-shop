import styles from "@/styles/Header.module.css";

function Header() {
  return (
    <header className={`mw ${styles.hd}`}>
      <nav>
        <h1>
          <a href="/">Home</a>
        </h1>

        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>

        <ul>
          <li>장바구니</li>
          <li>마이페이지</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
