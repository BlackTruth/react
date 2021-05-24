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
      <span>{gender}</span>  
      <span>{title}</span>
      <span>{price}</span>
      <span>{imageUrl}</span>    
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
};

export default Card;
