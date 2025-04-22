import Dropdown from "@/components/Dropdown.jsx";
import Pagination from "@/components/Pagination.jsx";
import ProductCard from "@/components/ProductCard.jsx";
import useGetProducts from "@/hooks/useGetProducts.js";
import styles from "@/styles/Shop.module.css";
import { getKeyByValue } from "@/utils/object.js";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const categories = { new: "New Products", top: "Top Products" };
const sortBy = {
  title: "Name",
  price: "Price: Low to High",
  "-price": "Price: High to Low",
};

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);

  const { data: products, isLoading } = useGetProducts({
    params: {
      _page: searchParams.get("_page"),
      _per_page: 6,
      category: searchParams.get("category"),
      _sort: searchParams.get("_sort"),
    },
  });

  const handlePageChange = (page) => {
    setParams("_page", page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const setParams = (key, value) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  useEffect(() => setParams("_page", 1), []);

  if (isLoading) return <p>Loading...</p>;

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
            options={Object.values(categories)}
            selectedOption={categories[searchParams.get("category")]}
            onOptionSelect={(option) => {
              const category = getKeyByValue(categories, option);
              setParams("category", category);
            }}
            isOpen={isOpenCategory}
            toggle={() => setIsOpenCategory(!isOpenCategory)}
          />
          {/* sort by */}
          <Dropdown
            label="Sort By"
            options={Object.values(sortBy)}
            selectedOption={sortBy[searchParams.get("_sort")]}
            onOptionSelect={(option) => {
              const _sort = getKeyByValue(sortBy, option);
              setParams("_sort", _sort);
            }}
            isOpen={isOpenSort}
            toggle={() => setIsOpenSort(!isOpenSort)}
          />
        </section>

        {/* product list */}
        <section className={styles.products}>
          <div className={styles.list}>
            {products.data.map((item) => (
              <ProductCard key={`prod-${item.id}`} product={item} />
            ))}
          </div>
          <Pagination
            currentPage={searchParams.get("_page")}
            totalPages={products.pages}
            onPageChange={handlePageChange}
          />
        </section>
      </div>
    </>
  );
}
