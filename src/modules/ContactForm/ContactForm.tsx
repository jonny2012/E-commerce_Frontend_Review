import styles from "./contactForm.module.scss"

 export const ContactForm = ()=>{

    return(
        <div className={styles.formContainer}>
        <form className={styles.formContact} action="">
            <div className={styles.userInfoInputs}>
            <input className={styles.rowInput} type="text"  placeholder="Your Name"/>
            <input className={styles.rowInput} type="email"  placeholder="Your Email"/>
            <input className={styles.rowInput} type="telephone"  placeholder="Your Phone"/>
            </div>
            <textarea className={styles.textarea} name="message" id="message" placeholder="Your Message"></textarea>
            <button className={styles.sendButton} type="submit">Send Message</button>
        </form>
        </div>
    )
}