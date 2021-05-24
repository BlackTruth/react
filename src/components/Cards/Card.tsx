import * as React from "react";
import { ICard } from "../../../api/mockedResponse";
import styles from "./card.module.scss";

type HandleDelete = (id) => void;

interface ClicableCard {
  card: ICard;
  onDelete: HandleDelete;
}

const Card: React.FC<ClicableCard> = ({
  card: {
    id,
    price,
    title,
    imageUrl,
    gender,
  },
  onDelete,
}: ClicableCard) => {
  return (
    <div className={styles.card}>
      <button onClick={() => onDelete(id)}>X</button>
      <span>{id}</span>
      <span>{price}</span>
      <span>{title}</span>
      <span>{imageUrl}</span>
      <span>{gender}</span>
    </div>
  );
};

export default Card;
