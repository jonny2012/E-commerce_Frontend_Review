import { RedTitle } from "Components/ui/RedTitle";
import { Categories } from "./components/categories";
import styles from "./browseByCategory.module.scss";
import LeftArrow from "assets/arrow-left.svg";
import RightArrow from "assets/arrow-right.svg";

export const BrowseByCategories = () => {
  return (
    <section>
      <div className={styles.container}>
        <RedTitle title="Categories" />
        <div className={styles.title}>
          <h1>Browse by Categories</h1>
          <div className={styles.arrows}>
            <div className={styles.circle}>
              <LeftArrow />
            </div>
            <div className={styles.circle}>
              <RightArrow />
            </div>
          </div>
        </div>
        <Categories />
      </div>
    </section>
  );
};
