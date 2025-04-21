import styles from "@/styles/ProductCardSkeleton.module.css";

function ProductCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={`${styles.img} skeleton`} />
      <div className={`${styles.text} skeleton`} />
      <div className={`${styles.subText} ${styles.text}  skeleton`} />
    </div>
  );
}

export default ProductCardSkeleton;
