import styles from "@/styles/Modal.module.css";

function ModalOverlay({ onClose, className }) {
  return <div className={`${className} ${styles.overlay}`} onClick={onClose} />;
}

export default ModalOverlay;
