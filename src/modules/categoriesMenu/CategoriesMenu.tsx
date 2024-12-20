import { Link } from "react-router-dom";
import { categoryList } from "./constants";
import styles from "./categoriesMenu.module.scss";

export const CategoriesMenu = () => {
  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categoryList &&
          categoryList.map((item) => (
            <Link
              className={styles.item}
              key={item.category}
              to={`/${item.category}`}
            >
              <li style={{ paddingLeft:"5px" }}>{item.category}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
