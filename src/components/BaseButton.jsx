import styles from "@/styles/BaseButton.module.css";

function BaseButton({ children, className, variant = "outlined", ...restProps }) {
  const variantClassName = variant === "filled" ? styles.filled : styles.outlined;

  return (
    <button
      className={`${className} ${styles.base} ${variantClassName}`}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
}

export default BaseButton;
