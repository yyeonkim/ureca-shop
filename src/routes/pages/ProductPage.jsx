import ProductDetailSection from "@/components/ProductDetailSection.jsx";
import ProductTabList from "@/components/ProductTabList.jsx";
import styles from "@/styles/Product.module.css";
import { lazy, useEffect } from "react";

const ProductSwiper = lazy(() => import("@/components/ProductSwiper.jsx"));

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* 상품 상세 */}
      <ProductDetailSection />

      {/* Tab section */}
      <section className={styles.tabSection}>
        <ProductTabList />
      </section>

      {/* 비슷한 상품 리스트 */}
      <section className={styles.similarSection}>
        <h2>Similar Items</h2>
        <ProductSwiper />
      </section>
    </>
  );
}
