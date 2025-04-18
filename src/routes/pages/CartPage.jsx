import CartListItem from "@/components/CartListItem.jsx";
import { useLoaderData } from "react-router";

export default function CartPage() {
  const { products, cart } = useLoaderData();

  return (
    <>
      <h2>Shopping Cart</h2>
      <ul>
        {products.map((prod) => {
          const cartItem = cart.find((item) => item.id === prod.id);
          return <CartListItem key={cartItem.id} title={prod.title} count={cartItem.count} />;
        })}
      </ul>
    </>
  );
}
