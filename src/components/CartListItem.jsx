import Close from "@/assets/Close.jsx";
import useIsMobile from "@/hooks/useIsMobile.js";
import styles from "@/styles/CartListItem.module.css";
import CountButton from "./CountButton.jsx";

function CartListItem({ product, count }) {
  const isMobile = useIsMobile();

  return (
    <li className={styles.list}>
      <div>
        <img src={`/products/${product.img}`} alt={product.title} />
      </div>

      <div>
        <div>
          <h3 className="line-clamp-2">{product.title}</h3>
          <span className={styles.price}>₩ {product.price.toLocaleString()}</span>
        </div>
        <CountButton count={count} />
      </div>

      <Close width={isMobile ? 20 : 24} height={isMobile ? 20 : 24} />
    </li>
  );
}

export default CartListItem;
