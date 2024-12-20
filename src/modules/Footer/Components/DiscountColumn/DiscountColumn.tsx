import { Emailform } from "../FooterEmailForm/Emailform";
import styles from "./../../Footer.module.scss";

export const DiscountColumn = () => {
  return (
    <div className={styles.content}>
      <h3>Exclusive</h3>
      <h4>Subscribe</h4>
      <span>Get 10% off your first order</span>
      <Emailform />
    </div>
  );
};
