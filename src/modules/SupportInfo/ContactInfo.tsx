import PhoneIcon from "assets/icon-phone.svg";
import EmailIcon from "assets/icon-mail.svg";
import { Line } from "../../Components/ui/Line";
import styles from "./contactInfo.module.scss";

export const ContactInfo = () => {
  return (
    <div className={styles.infoBox}>
      <div className={styles.callInfoBox}>
        <div className={styles.iconHeader}>
          <PhoneIcon />
          <h3>Call To Us</h3>
        </div>
        <span>We are available 24/7, 7 days a week.</span>
        <span>Phone: +8801611112222</span>
      </div>
      <Line />
      <div className={styles.callInfoBox}>
        <div className={styles.iconHeader}>
          <EmailIcon />
          <h3>Write To Us</h3>
        </div>
        <span>Fill out our form and we will contact you within 24 hours.</span>
        <span>Emails: customer@exclusive.com</span>
        <span>Emails: support@exclusive.com</span>
      </div>
    </div>
  );
};
