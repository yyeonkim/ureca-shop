import styles from "@/styles/MoreLink.module.css";

function MoreLink({ onClick }) {
  // return (
  //   <Link className={styles.more} to="/shop">
  //     View All
  //   </Link>
  // );

  return (
    <span className={styles.more} onClick={onClick}>
      View All
    </span>
  );
}

export default MoreLink;
