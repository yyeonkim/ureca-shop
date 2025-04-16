import MoreLink from "@/components/MoreLink.jsx";
import ProductCard from "@/components/ProductCard.jsx";
import ProductCardSkeleton from "@/components/ProductCardSkeleton.jsx";
import useGetProducts from "@/hooks/useGetProducts.js";
import styles from "@/styles/Main.module.css";
import { lazy, Suspense, useState } from "react";

const MainSwiper = lazy(() => import("@/components/MainSwiper.jsx"));

export default function MainPage() {
  const [params, setParams] = useState({
    _limit: 6,
    category: "new",
  });

  const { data: products, isLoading } = useGetProducts({
    params,
  });

  return (
    <>
      <Suspense fallback={<div className={`${styles.loading} skeleton`} />}>
        <MainSwiper />
      </Suspense>

      <section className={styles.shopSection}>
        <div>
          <h2>Shop The Latest</h2>
          {params._limit && <MoreLink onClick={() => setParams({ _sort: "category" })} />}
        </div>
        {/* 상품 리스트 */}
        <div>
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, index) => <ProductCardSkeleton key={index} />)
            : products.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>
    </>
  );
}
