import styles from "@/styles/ProductPrice.module.css";

function ProductPrice({ originalPrice, discountAmount = 0, className }) {
  return (
    <div className={`${className} ${styles.price}`}>
      <span className={discountAmount > 0 ? styles.discounted : ""}>
        ₩ {originalPrice.toLocaleString()}
      </span>
      {discountAmount > 0 && (
        <span>₩ {Math.round(originalPrice - discountAmount).toLocaleString()}</span>
      )}
    </div>
  );
}

export default ProductPrice;
