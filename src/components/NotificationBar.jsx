import styles from "@/styles/NotificationBar.module.css";

function NotificationBar({ message, linkText, linkUrl }) {
  return (
    <div className={styles.noti}>
      <p>{message}</p>
      <Link to={linkUrl}>{linkText}</Link>
    </div>
  );
}

export default NotificationBar;
