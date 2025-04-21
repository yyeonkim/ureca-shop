import styles from "@/styles/ProductCard.module.css";
import { memo } from "react";
import { Link } from "react-router";
import ProductPrice from "./ProductPrice.jsx";

function ProductCard({ product, className }) {
  return (
    <div className={`${className} ${styles.productCard}`}>
      <div className={styles.imgWrap}>
        <img src={`/products/${product.img}`} alt={product.title} />
        {product.discount > 0 && <span>{`-${product.discount}%`}</span>}
      </div>
      <h4 className="line-clamp-2">{product.title}</h4>
      <ProductPrice
        originalPrice={product.price}
        discountAmount={(product.price * product.discount) / 100}
      />
      <Link to={`/products/${product.id}`}>{product.title}</Link>
    </div>
  );
}

export default memo(
  ProductCard,
  (oldProps, newProps) => oldProps.product.id === newProps.product.id
);
