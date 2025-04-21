import styles from "@/styles/Close.module.css";

function Close({ width, height, fill, className, ...restProps }) {
  return (
    <svg
      {...restProps}
      className={`${className} bi bi-x ${styles.close}`}
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 20}
      height={height ?? 20}
      fill={fill ?? "black"}
      viewBox="0 0 16 16"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
    </svg>
  );
}

export default Close;
