import styles from "@/styles/Main.module.css";
import { lazy, Suspense } from "react";

const MainSwiper = lazy(() => import("@/components/MainSwiper.jsx"));

export default function MainPage() {
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
      </section>
    </>
  );
}
