import styles from "@/styles/Modal.module.css";
import ModalOverlay from "./ModalOverlay.jsx";
import ModalPortal from "./ModalPortal.jsx";

function BaseModal({ children, isOpen, onClose, className }) {
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <div role="dialog" className={styles.base} aria-modal="true">
        <ModalOverlay onClose={onClose} />
        <div className={`${className} ${styles.content}`}>{children}</div>
      </div>
    </ModalPortal>
  );
}

export default BaseModal;
