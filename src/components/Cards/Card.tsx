import * as React from "react";
import { ICard } from "../../../api/mockedResponse";
import styles from "./card.module.scss";

interface ClicableCard {
  card: ICard;
}

const Card: React.FC<ClicableCard> = ({
   card: {
    id,
    price,
    title,
    imageUrl,
    gender,
   } 
}: ClicableCard) => {
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
