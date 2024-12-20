import { FC } from "react";
import styles from "./redTitle.module.scss";

export interface IProps {
  title: string;
}

export const RedTitle: FC<IProps> = ({ title }) => {
  return (
    <div className={styles.titleBox}>
      <div className={styles.redBox}></div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
