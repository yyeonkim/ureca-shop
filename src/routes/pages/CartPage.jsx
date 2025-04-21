import CartListItem from "@/components/CartListItem.jsx";
import useIsMobile from "@/hooks/useIsMobile.js";
import styles from "@/styles/Cart.module.css";
import { useLoaderData } from "react-router";

export default function CartPage() {
  const { products, cart } = useLoaderData();
  const isMobile = useIsMobile();

  return (
    <>
      <h2 className={styles.h2}>Shopping Cart</h2>
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
    </>
  );
}
