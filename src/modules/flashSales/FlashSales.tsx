import { ProductCard } from "Components/ProductCard/ProductCard";
import { RedTitle } from "Components/ui/RedTitle";
import { products } from "./constants";
import styles from "./flashSales.module.scss";
import { useState } from "react";
import { Line } from "Components/ui/Line";
import { RedButton } from "Components/ui/RedButton";

export const FlashSales = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  return (
    <div className={styles.productsContainer}>
      <RedTitle title="Today's" />
      <div>
        <h1>Flash Sales</h1>
      </div>
      <div
        className={
          isShowAll ? `${styles.products} ${styles.all}` : styles.products
        }
      >
        {products &&
          products.map((product, i) => (
            <ProductCard
              key={i}
              img={product.img}
              name={product.name}
              price={product.price}
              discountPrice={product.discountPrice}
              reviews={product.reviews}
            />
          ))}
      </div>
      <div className={styles.btnProducts}>
        <RedButton
          onClick={() => setIsShowAll(!isShowAll)}
          words="All Products"
          width="234px"
        />
      </div>
      <Line />
    </div>
  );
};
