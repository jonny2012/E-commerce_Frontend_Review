import { ProductCard } from "Components/ProductCard/ProductCard";
import { RedTitle } from "Components/ui/RedTitle";
import { products } from "./constants";
import styles from "./bestProducts.module.scss";
import { useState } from "react";
import { RedButton } from "Components/ui/RedButton";

export const BestProducts = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  return (
    <div className={styles.productsContainer}>
      <RedTitle title="This Month's" />
      <div className={styles.title}>
        <h1>Best Selling Products</h1>
        <RedButton
          onClick={() => setIsShowAll(!isShowAll)}
          words="View all"
          width="130px"
        />
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
    </div>
  );
};
