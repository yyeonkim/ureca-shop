import styles from "@/styles/BaseButton.module.css";

function BaseButton({ children, className, ...restProps }) {
  return (
    <button className={`${className} ${styles.base}`} type="button" {...restProps}>
      {children}
    </button>
  );
}

export default BaseButton;
