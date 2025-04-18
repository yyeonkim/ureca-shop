import { putCart } from "@/api/cart.js";
import useIsMobile from "@/hooks/useIsMobile.js";
import styles from "@/styles/ProductDetail.module.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import BaseButton from "./BaseButton.jsx";
import CartModal from "./CartModal.jsx";
import CountButton from "./CountButton.jsx";

function ProductDetailSection() {
  const { product } = useLoaderData();
  const isMobile = useIsMobile();

  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddCart = async () => {
    if (isMobile) {
      setIsOpen(true);
      return;
    }
    // 장바구니 담기
    await putCart({
      id: product.id,
      count,
    });
  };

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  return (
    <>
      <section className={styles.prod}>
        {/* 상품 정보 */}
        <div className={styles.imgWrap}>
          <img src={product.img} alt={product.title} />
        </div>
        <div className={styles.info}>
          <h2>{product.title}</h2>
          <span>₩ {product.price.toLocaleString()}</span>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a
              volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed
              quis mauris eget arcu facilisis consequat sed eu felis.
            </p>
            <div>
              {!isMobile && <CountButton count={count} onChangeCount={(cnt) => setCount(cnt)} />}
              <BaseButton onClick={handleAddCart}>ADD TO CART</BaseButton>
            </div>
            <dl>
              <div>
                <dt>SKU</dt>
                <dd>12</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{product.category}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {isMobile && <CartModal product={product} isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default ProductDetailSection;
