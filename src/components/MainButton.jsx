import styles from "@/styles/MainButton.module.css";
import React from "react";

function MainButton({ children }) {
  return <button className={styles.mainButton}>{children}</button>;
}

export default MainButton;
