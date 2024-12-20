import styles from "./../../Header.module.scss"
import Search from "../../../../assets/header_icons/Search.svg"


export const SearchBar = ()=>{

    return (
        <div className={styles.searchBox}>
        <input type="search" placeholder="What are you looking for?" className={styles.search} />
        <button className={styles.buttonSearch}><Search/></button>
        </div>
       
   
    )
}