import { categories } from "../constants"
import styles from "./../browseByCategory.module.scss"


 export const  Categories = ()=>{


    return (
    <div className={styles.categories}>
     {categories && categories.map((category,i)=>(
        <div key={i} className={styles.category}>{category}</div>
     ))}
    </div>
    )
}
