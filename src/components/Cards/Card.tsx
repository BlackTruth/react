import * as React from "react";
import { ICard } from "../../../api/mockedResponse";
import styles from "./card.module.scss";

const Card: React.FC<ICard> = ({
  id,
  price,
  title,
  imageUrl,
  gender,
}: ICard) => {
  return (
    <div className={styles.card}>
      <span>{id}</span>
      <span>{price}</span>
      <span>{title}</span>
      <span>{imageUrl}</span>
      <span>{gender}</span>
    </div>
  );
};

export default Card;
