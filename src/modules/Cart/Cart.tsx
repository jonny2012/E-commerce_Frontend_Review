import { products } from "./constants";
import styles from "./cart.module.scss";
import { useState, useEffect } from "react";
import { CartProduct } from "./CartProduct";
import { Link } from "react-router-dom";
import { RedButton } from "Components/ui/RedButton";
import { CheckoutBox } from "./CheckoutBox";

export const Cart = () => {
  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    const initialTotal = products.reduce((total, product) => {
      return total + product.price;
    }, 0);
    setSubTotal(initialTotal);
  }, [products]);

  const handleApplyCoupon = () => {
    console.log("Apply");
  };
  return (
    <section className={styles.sectionCart}>
      <div className={styles.cartContainer}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.productTitle}>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, i) => (
                <CartProduct
                  product={product}
                  key={product.name + i}
                  setSubTotal={setSubTotal}
                  i={i}
                />
              ))}
          </tbody>
        </table>
        <div className={styles.buttons}>
          <Link to={"/shop"}>
            <button className={styles.btn}>Return to Shop</button>
          </Link>
          <button className={styles.btn}>Update Cart</button>
        </div>
      </div>
      <section className={styles.totalBox}>
        <div className={styles.couponBox}>
          <input
            className={styles.couponInput}
            type="text"
            placeholder="Coupon code"
          />
          <RedButton
            words="Aply Coupon"
            width="200px"
            onClick={handleApplyCoupon}
          />
        </div>
        <CheckoutBox subTotal={subTotal} />
      </section>
    </section>
  );
};
