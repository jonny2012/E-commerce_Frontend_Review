import { Link } from "react-router-dom";
import styles from "./../../Header.module.scss";

export const Navbar = () => {
  const style ={textDecoration:"none", color:"#000", fontSize:"16px"}
  return (
    <nav className={styles.navbar} >
      <Link className={styles.link} to={"/"}>Home</Link>
      <Link  className={styles.link} to={"/contact"}>Contact</Link>
      <Link  className={styles.link} to={"/about"}>About</Link>
      <Link  className={styles.link} to={"/register"}>Sign Up</Link>
    </nav>
  );
};
