import styles from "@/styles/ProductCardSkeleton.module.css";
import { memo } from "react";

function ProductCardSkeleton() {
  return (
    <div className={styles.card}>
      {/* img */}
      <div className={`${styles.img} skeleton`} />
      {/* title */}
      <div className={`${styles.text} skeleton`} />
      {/* price */}
      <div className={`${styles.subText} ${styles.text}  skeleton`} />
    </div>
  );
}

export default memo(ProductCardSkeleton);
