import styles from "./homePage.module.scss";
import { CategoriesMenu } from "modules/categoriesMenu/CategoriesMenu";
import { Slider } from "modules/mainPageSlider/Slider";
import { BrowseByCategories } from "modules/browseByCategories/BrowseByCategories";
import { FlashSales } from "modules/flashSales/FlashSales";
import { BestProducts } from "modules/bestSellingProducts/BestProducts";

export const HomePage = () => {
  return (
    <section className={styles.homePage}>
      <div className={styles.categoriesSlider}>
        <CategoriesMenu />
        <Slider />
      </div>
      <FlashSales />
      <BrowseByCategories />
      <BestProducts />
    </section>
  );
};
