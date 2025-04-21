import CartListItem from "@/components/CartListItem.jsx";
import useIsMobile from "@/hooks/useIsMobile.js";
import styles from "@/styles/Cart.module.css";
import { useLoaderData } from "react-router";

export default function CartPage() {
  const { products, cart } = useLoaderData();
  const isMobile = useIsMobile();

  const calculateTotalAmount = () => {
    return products.reduce((acc, prod) => {
      const cartItem = cart.find((item) => item.id === prod.id);
      return acc + prod.price * cartItem.count;
    }, 0);
  };

  return (
    <>
      <h2 className={styles.h2}>Shopping Cart</h2>

      {/* 장바구니 리스트 */}
      <ul className={styles.ul}>
        {products.map((prod) => {
          const cartItem = cart.find((item) => item.id === prod.id);
          return (
            <>
              <CartListItem key={cartItem.id} product={prod} count={cartItem.count} />
              {!isMobile && <hr className={styles.hr} />}
            </>
          );
        })}
      </ul>

      {/* 총 금액 */}
      <div className={styles.totalAmount}>
        <strong>TOTAL</strong>
        <span>₩ {calculateTotalAmount().toLocaleString()}</span>
      </div>
    </>
  );
}
