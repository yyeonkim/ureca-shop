import styles from "@/styles/ProductTabList.module.css";
import { memo, useState } from "react";

const tabs = ["Description", "Aditional information", "Reviews"];
const tabPanels = [<>탭 1의 내용</>, <>탭 2의 내용</>, <>탭 3의 내용</>];

function ProductTabList() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className={styles.tablist} role="tablist" aria-label="탭 목록">
        {tabs.map((tab, index) => (
          <button
            className={activeTab === index ? styles.active : ""}
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
          className={`${activeTab === index ? styles.active : ""} ${styles.tabPanel}`}
          key={`tab-panel-${index}`}
          role="tabpanel"
          id={`tab-panel-${index}`}
          aria-labelledby={`tab-${index}`}
        >
          {item}
        </div>
      ))}
    </>
  );
}

export default memo(ProductTabList, () => true);
