import { LoginForm } from "modules/UserLoginSignUp/LoginModule/LoginForm"
import styles from "./Login.module.scss"

export const Login= ()=>{

    return (
        <section className={styles.loginContainer}>
          <div className={styles.login}>
          {/* <img className={styles.img} src={LoginImg} alt="login-image" /> */}
          <LoginForm/>  
          </div>
        </section>
    )
}