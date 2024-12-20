import styles from "./cart.module.scss";
import { Line } from "Components/ui/Line";

interface Props {
  subTotal: number;
}

export const CheckoutBox = ({ subTotal }: Props) => {
  return (
    <div className={styles.cartTotal}>
      <h3>Cart Total</h3>
      <div className={styles.flexBetween}>
        <span>Subtotal:</span>
        <span>{`$${subTotal}`}</span>
      </div>
      <Line />
      <div className={styles.flexBetween}>
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <Line />
      <div className={styles.flexBetween}>
        <span>Total:</span>
        <span>{`$${subTotal}`}</span>
      </div>
      <Line />
    </div>
  );
};
