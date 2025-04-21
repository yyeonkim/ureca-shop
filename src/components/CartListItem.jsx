import Close from "@/assets/Close.jsx";
import useIsMobile from "@/hooks/useIsMobile.js";
import styles from "@/styles/CartListItem.module.css";
import { memo } from "react";
import { Link } from "react-router";
import CountButton from "./CountButton.jsx";
import ProductPrice from "./ProductPrice.jsx";

function CartListItem({ product, count, onChangeCount, onClickDelete }) {
  const isMobile = useIsMobile();

  return (
    <li className={styles.list}>
      <div>
        <img src={`/products/${product.img}`} alt={product.title} />
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </div>

      <div>
        <div>
          <h3 className="line-clamp-2">{product.title}</h3>
          <ProductPrice
            className={styles.price}
            originalPrice={product.price}
            discountAmount={(product.price * product.discount) / 100}
          />
        </div>
        <CountButton count={count} onChangeCount={(cnt) => onChangeCount(cnt, product.id)} />
      </div>

      {/* 삭제 버튼 */}
      <Close
        width={isMobile ? 20 : 24}
        height={isMobile ? 20 : 24}
        onClick={() => onClickDelete(product.id)}
      />
    </li>
  );
}

// id, count가 동일하면 메모
export default memo(
  CartListItem,
  (oldProps, newProps) =>
    oldProps.product.id === newProps.product.id && oldProps.count === newProps.count
);
