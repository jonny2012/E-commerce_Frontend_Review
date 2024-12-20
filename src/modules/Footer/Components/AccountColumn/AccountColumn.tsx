import styles from "./../../Footer.module.scss";
import { accountLinks } from "modules/Footer/constants/iconsData";
import { Link } from "react-router-dom";

export const AccountColumn = () => {
  return (
    <div className={styles.content}>
      <h3>Account</h3>
      {accountLinks.map((link) => (
        <Link className={styles.whiteLink} key={link.page} to={link.to}>
          {link.page}
        </Link>
      ))}
    </div>
  );
};
