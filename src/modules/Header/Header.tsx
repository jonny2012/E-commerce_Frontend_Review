import { SearchBar } from "./Components/searchBar/SearchBar";
import { AccountIcons } from "./Components/AccountIcons/AccountIcons";
import  "./Header.module.scss";
import { Navbar } from "./Components/NavBar/Navbar";
import styles from "./Header.module.scss"

const Header = () => {

  
  console.log(styles)
  return (
    <section className={styles.header} >
      <div className={styles.containerHeader}>
        <h2>Exclusive</h2>
        <Navbar />
        <div className={styles.right}>
          <SearchBar />
          {<AccountIcons />}
        </div>
      </div>
    </section>
  );
};
export { Header };
