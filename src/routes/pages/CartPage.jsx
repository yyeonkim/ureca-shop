import { deleteCart, patchCart } from "@/api/cart.js";
import CartListItem from "@/components/CartListItem.jsx";
import NotificationBar from "@/components/NotificationBar.jsx";
import styles from "@/styles/Cart.module.css";
import { useState } from "react";
import { useLoaderData } from "react-router";

export default function CartPage() {
  const { products, cart } = useLoaderData();

  const [cartList, setCartList] = useState(cart);

  const handleChangeCount = async (count, prodId) => {
    const newCartItem = { id: prodId, count };
    setCartList((prev) => prev.map((item) => (item.id === prodId ? newCartItem : item)));
    await patchCart(newCartItem);
  };

  const handleDelete = async (id) => {
    setCartList((prev) => prev.filter((item) => item.id !== id));
    await deleteCart(id);
  };

  const calculateTotalAmount = () => {
    return cartList.reduce((acc, cartItem) => {
      const product = products.find((prod) => prod.id === cartItem.id);
      return acc + product.price * cartItem.count;
    }, 0);
  };

  return (
    <>
      <h2 className={styles.h2}>Shopping Cart</h2>

      {/* 장바구니 리스트 */}
      {cartList.length === 0 ? (
        <NotificationBar
          message="No items in your cart."
          linkText="BROWSE PRODUCT"
          linkUrl="/shop"
        />
      ) : (
        <>
          <ul className={styles.ul}>
            {cartList.map((cartItem) => {
              const product = products.find((prod) => prod.id === cartItem.id);
              return (
                <>
                  <CartListItem
                    key={cartItem.id}
                    product={product}
                    count={cartItem.count}
                    onChangeCount={handleChangeCount}
                    onClickDelete={handleDelete}
                  />
                  <hr className={styles.hr} />
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
      )}
    </>
  );
}
