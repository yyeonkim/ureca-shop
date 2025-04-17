import styles from "@/styles/Footer.module.css";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className={`${styles.footer} mw`}>
      <div>
        <nav>
          <Link to="#">CONTACT</Link>
          <Link to="#">TERMS OF SERVICES</Link>
          <Link to="#">SHIPPING AND RETURNS</Link>
        </nav>
        <div>Give an email, get the newsletter.</div>
      </div>
      <div>
        <p>© 2021 Shelly. Terms of use and privacy policy.</p>
        <div className={styles.sns}>
          <i>L</i>
          <i>F</i>
          <i>I</i>
          <i>T</i>
        </div>
      </div>
    </footer>
  );
}
