import { memo } from "react";

function ProductCard({ product }) {
  return (
    <div>
      <div>
        <img src={product.imgSrc} alt={product.title} />
      </div>
      <h4>{product.title}</h4>
      <span>{product.price}</span>
    </div>
  );
}

export default memo(
  ProductCard,
  (oldProps, newProps) => oldProps.product.id === newProps.product.id
);
