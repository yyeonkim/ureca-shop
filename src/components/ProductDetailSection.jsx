import useGetProducts from "@/hooks/useGetProducts.js";
import styles from "@/styles/ProductDetail.module.css";
import { useLoaderData } from "react-router";
import BaseButton from "./BaseButton.jsx";

function ProductDetailSection() {
  const { product } = useLoaderData();

  const { data: similarProds, isLoading } = useGetProducts({
    params: { category: product.category, id_ne: product.id },
  });

  return (
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
          <BaseButton>ADD TO CART</BaseButton>
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
  );
}

export default ProductDetailSection;
