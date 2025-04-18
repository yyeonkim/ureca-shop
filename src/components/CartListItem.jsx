function CartListItem({ title, count }) {
  return (
    <li>
      <h3>{title}</h3>
      <span>{count}개</span>
    </li>
  );
}

export default CartListItem;
