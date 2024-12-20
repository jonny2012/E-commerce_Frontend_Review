
import styles from "./Footer.module.scss";
import { DiscountColumn } from "./Components/DiscountColumn/DiscountColumn";
import { ContactsColumn } from "./Components/ContactsColumn/ContactsColumn";
import { AccountColumn } from "./Components/AccountColumn/AccountColumn";
import { QuickLinksColumn } from "./Components/QuickLinksColumn/QuickLinksColumn";
import { DownloadColumn } from "./Components/DownloadColumn/DownloadColumn";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
     <DiscountColumn/>
<ContactsColumn/>
   <AccountColumn/>
<QuickLinksColumn/>
<DownloadColumn/>
      </div>
    </section>
  );
};
export { Footer };
