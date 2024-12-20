import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./cart.module.scss";
import { Products } from "./constants";

interface CartProps {
  product: Products;
  i: number;
  setSubTotal: Dispatch<SetStateAction<number>>;
}
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const CartProduct = ({ product, i, setSubTotal }: CartProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [total, setTotal] = useState<number>(product.price);

  const changeQuantity = (e: ChangeEvent) => {
    let value = Number(e.target.value);
    setQuantity(() => value);
  };

  useEffect(() => {
    const newTotal = quantity * product.price;
    setTotal(newTotal);
    setSubTotal((prev) => {
      const oldTotal = total;
      return prev - oldTotal + newTotal;
    });
  }, [quantity]);

  return (
    <tr key={product.name + i}>
      <th className={styles.productName}>
        <img
          className={styles.productImage}
          src={product.img}
          alt={product.name}
        />
        {product.name}
      </th>
      <th>{`$${product.price}`}</th>
      <th>
        <input
          className={styles.productQuantity}
          type="number"
          name="counter"
          min={1}
          max={20}
          value={quantity}
          onChange={changeQuantity}
        />
      </th>
      <th>{`$${total}`}</th>
    </tr>
  );
};
