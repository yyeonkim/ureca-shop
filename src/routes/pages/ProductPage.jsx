import BaseButton from "@/components/BaseButton.jsx";
import useGetProducts from "@/hooks/useGetProducts.js";
import styles from "@/styles/Product.module.css";
import { useState } from "react";
import { useLoaderData } from "react-router";

const tabs = ["Description", "Aditional information", "Reviews"];
const tabPanels = [<>탭 1의 내용</>, <>탭 2의 내용</>, <>탭 3의 내용</>];

export default function ProductPage() {
  const { product } = useLoaderData();

  const { data: similarProds, isLoading } = useGetProducts({
    params: { category: product.category, id_ne: product.id },
  });

  const [activeTab, setActiveTab] = useState(1);

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

      {/* Tab section */}
      <section>
        <div role="tablist" aria-label="탭 목록">
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={`tab-${index}`}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tab-panel-${index}`}
              id={`tab-${index}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        {tabPanels.map((item, index) => (
          <div
            key={`tab-panel-${index}`}
            role="tabpanel"
            id={`tab-panel-${index}`}
            aria-labelledby={`tab-${index}`}
          >
            {item}
          </div>
        ))}
      </section>

      {/* 비슷한 상품 리스트 */}
      <section>
        <h2>Similar Items</h2>
        {!isLoading && similarProds.map((item) => <h3>{item.title}</h3>)}
      </section>
    </>
  );
}
