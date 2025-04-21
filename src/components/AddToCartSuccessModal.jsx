import styles from "@/styles/AddToCartSuccessModal.module.css";
import { useNavigate } from "react-router";
import BaseButton from "./BaseButton.jsx";
import BaseModal from "./modal/BaseModal.jsx";

function AddToCartSuccessModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  return (
    <BaseModal className={styles.modal} isOpen={isOpen} onClose={onClose}>
      <h3>장바구니에 담았습니다.</h3>

      <div>
        <BaseButton onClick={onClose}>계속 담기</BaseButton>
        <BaseButton variant="filled" onClick={() => navigate("/cart")}>
          장바구니 가기
        </BaseButton>
      </div>
    </BaseModal>
  );
}

export default AddToCartSuccessModal;
