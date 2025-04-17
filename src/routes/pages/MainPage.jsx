import MoreLink from "@/components/MoreLink.jsx";
import ProductCard from "@/components/ProductCard.jsx";
import ProductCardSkeleton from "@/components/ProductCardSkeleton.jsx";
import useGetProducts from "@/hooks/useGetProducts.js";
import useIsMobile from "@/hooks/useIsMobile.js";
import styles from "@/styles/Main.module.css";
import { lazy, Suspense } from "react";

const MainSwiper = lazy(() => import("@/components/MainSwiper.jsx"));

export default function MainPage() {
  const isMobile = useIsMobile();

  const _limit = isMobile ? 4 : 6;
  const { data: products, isLoading } = useGetProducts({ params: { category: "new", _limit } });

  return (
    <>
      <Suspense fallback={<div className={`${styles.loading} skeleton`} />}>
        <MainSwiper />
      </Suspense>

      <section className={styles.shopSection}>
        <div>
          <h2>Shop The Latest</h2>
          <MoreLink />
        </div>
        {/* 상품 리스트 */}
        <div>
          {isLoading
            ? Array(_limit)
                .fill(0)
                .map((_, i) => <ProductCardSkeleton key={`loading-${i}`} />)
            : products.map((item) => <ProductCard key={`prod-${item.id}`} product={item} />)}
        </div>
      </section>
    </>
  );
}
