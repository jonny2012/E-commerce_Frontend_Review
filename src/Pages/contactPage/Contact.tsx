import { ContactForm } from "modules/ContactForm/ContactForm";
import styles from "./contactPage.module.scss";
import { ContactInfo } from "modules/SupportInfo/ContactInfo";

export const Contact = () => {
  return (
    <section className={styles.contactPage}>
      <div className={styles.container}>
        <ContactInfo/>
        <ContactForm />
        
      </div>
    </section>
  );
};
