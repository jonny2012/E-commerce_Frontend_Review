import styles from "./../../Footer.module.scss";

export const ContactsColumn = () => {
  return (
    <div className={styles.content}>
      <h3>Support</h3>
      <a href="#" className={styles.whiteLink}>
      <span style={{ whiteSpace: "normal" }}>
        Markische Allee 142, Berlin Germany
      </span>
      </a>
      <a href="#" className={styles.whiteLink}>
      
        <span>exclusive@gmail.com</span>
      </a>
      <a href="#" className={styles.whiteLink}>
      
      <span>+491234587328</span>
      </a>
    </div>
  );
};
