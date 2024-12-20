import styles from "./../../Footer.module.scss";

export const QuickLinksColumn = () => {
  return (
    <div className={styles.content}>
      <h3>Quick Link</h3>
      <a href="#" className={styles.whiteLink}>
        <span>Privacy Policy</span>
      </a>
      <a href="#" className={styles.whiteLink}>
        <span>Terms Of Use</span>
      </a>
      <a href="#" className={styles.whiteLink}>
        <span>FAQ</span>
      </a>
      <a href="#" className={styles.whiteLink}>
        <span>Contact</span>
      </a>
    </div>
  );
};
