import { putCart } from "@/api/cart.js";
import styles from "@/styles/AddToCartModal.module.css";
import { useState } from "react";
import BaseButton from "./BaseButton.jsx";
import CountButton from "./CountButton.jsx";
import BaseModal from "./modal/BaseModal.jsx";
import ProductPrice from "./ProductPrice.jsx";

function AddToCartModal({ isOpen, onClose, product }) {
  const [count, setCount] = useState(1);

  const handleAddCart = async () => {
    // 장바구니 담기
    await putCart({
      id: product.id,
      count,
    });
    onClose();
  };

  return (
    <BaseModal className={styles.modal} isOpen={isOpen} onClose={onClose}>
      <h3>{product.title}</h3>
      <hr />
      <div>
        <ProductPrice
          originalPrice={product.price}
          discountAmount={(product.price * product.discountAmount) / 100}
        />
        <CountButton count={count} onChangeCount={(cnt) => setCount(cnt)} />
      </div>
      <div>
        <BaseButton
          onClick={() => {
            onClose();
            setCount(1);
          }}
        >
          CANCEL
        </BaseButton>
        <BaseButton variant="filled" onClick={handleAddCart}>
          ADD TO CART
        </BaseButton>
      </div>
    </BaseModal>
  );
}

export default AddToCartModal;
