import Dropdown from "@/components/Dropdown.jsx";
import ProductCard from "@/components/ProductCard.jsx";
import styles from "@/styles/Shop.module.css";
import { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router";

const categories = ["New Products", "Top Products"];
const sortByList = ["Name", "Price: Low to High", "Price: High to Low"];

export default function ShopPage() {
  const { products } = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);

  return (
    <>
      <h2 className={styles.h2}>Shop The Latest</h2>

      <div className={styles.shop}>
        {/* filter */}
        <section className={styles.filters}>
          {/* category */}
          <Dropdown
            className={styles.category}
            label="Category"
            options={categories}
            // selectedOption={}
            // onOptionSelect={}
            isOpen={isOpenCategory}
            toggle={() => setIsOpenCategory(!isOpenCategory)}
          />
          {/* sort by */}
          <Dropdown
            label="Sort By"
            options={sortByList}
            // selectedOption={}
            // onOptionSelect={}
            isOpen={isOpenSort}
            toggle={() => setIsOpenSort(!isOpenSort)}
          />
        </section>

        {/* product list */}
        <section className={styles.list}>
          {products.map((item) => (
            <ProductCard key={`prod-${item.id}`} product={item} />
          ))}
        </section>
      </div>
    </>
  );
}
