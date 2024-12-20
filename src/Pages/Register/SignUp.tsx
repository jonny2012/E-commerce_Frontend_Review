import { SignUpForm } from "modules/UserLoginSignUp/RegistrationModule/SignUpForm";
import LoginImg from "./../../assets/SignUpLogin_Image.jpg";
import styles from "./SignUp.module.scss";

export const SignUp = () => {
  return (
    <section className={styles.signupContainer}>
      <div className={styles.signup}>
        {/* <img src={LoginImg} alt="login-img" /> */}
        <SignUpForm />
      </div>
    </section>
  );
};
