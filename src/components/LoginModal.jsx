import styles from "@/styles/LoginModal.module.css";
import BaseButton from "./BaseButton.jsx";
import BaseModal from "./modal/BaseModal.jsx";

function LoginModal({ isOpen, onClose }) {
  return (
    <BaseModal className={styles.modal} isOpen={isOpen} onClose={onClose}>
      <p>로그인이 필요합니다. 로그인하시겠습니까?</p>
      <div>
        <BaseButton onClick={onClose}>취소</BaseButton>
        <BaseButton>확인</BaseButton>
      </div>
    </BaseModal>
  );
}

export default LoginModal;
