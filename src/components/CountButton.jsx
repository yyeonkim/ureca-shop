import styles from "@/styles/CountButton.module.css";

function CountButton({ count, onChangeCount }) {
  return (
    <div className={styles.count}>
      <button type="button" onClick={() => onChangeCount(count === 1 ? 1 : count - 1)}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => onChangeCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default CountButton;
