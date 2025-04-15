import { getProducts } from "@/api/products.js";
import ProductCard from "@/components/ProductCard.jsx";
import styles from "@/styles/Main.module.css";
import { lazy, Suspense, useEffect, useState } from "react";

const MainSwiper = lazy(() => import("@/components/MainSwiper.jsx"));

export default function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Suspense fallback={<p className={styles.loading}>Loading...</p>}>
        <MainSwiper />
      </Suspense>

      <section className={styles.shopSection}>
        <div>
          <h2>Shop The Latest</h2>
          <span>
            <a href="/shop">View All</a>
          </span>
        </div>

        <div>
          {products.map((item) => (
            <ProductCard product={item} />
          ))}
        </div>
      </section>
    </>
  );
}
