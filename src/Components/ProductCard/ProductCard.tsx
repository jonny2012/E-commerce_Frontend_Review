import { FC } from "react";
import styles from "./productCard.module.scss";
import GamepadImage from "assets/gamepad.jpg";
import FiveStart from "assets/Five star.svg";

export interface ICard {
  img: string;
  price: number;
  name: string;
  discountPrice?: number;
  reviews: number;
}

export const ProductCard: FC<ICard> = ({
  img,
  price,
  discountPrice,
  reviews,
  name,
}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.cardImageBox}>
        <img className={styles.cardImage} src={img} alt="" />
      </div>
      <span>{name}</span>
      <div className={styles.cardPriceBox}>
        <span>{discountPrice ? `$${discountPrice}` : `$${price}`}</span>
        <span
          style={
            discountPrice
              ? { textDecoration: "line-through", color: "gray" }
              : { textDecoration: "none" }
          }
        >
          {discountPrice ? `$${price}` : `$${discountPrice}`}
        </span>
      </div>
      <div>
        <FiveStart />
        <span>({reviews})</span>
      </div>
    </div>
  );
};
