import styles from "@/styles/ProductCard.module.css";
import { memo } from "react";
import { Link } from "react-router";

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imgWrap}>
        <img src={`/products/${product.img}`} alt={product.title} />
        {product.discount > 0 && <span>{`-${product.discount}%`}</span>}
      </div>
      <h4>{product.title}</h4>
      <span>₩ {product.price.toLocaleString()}</span>
      <Link to={`/products/${product.id}`}>{product.title}</Link>
    </div>
  );
}

export default memo(
  ProductCard,
  (oldProps, newProps) => oldProps.product.id === newProps.product.id
);
