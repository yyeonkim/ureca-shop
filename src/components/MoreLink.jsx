import styles from "@/styles/MoreLink.module.css";
import { Link } from "react-router";

function MoreLink() {
  return (
    <Link className={styles.more} href="/shop">
      View All
    </Link>
  );
}

export default MoreLink;
