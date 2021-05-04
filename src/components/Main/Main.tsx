import * as React from "react";
import { Avatar } from "../../store";
import CardsContainer from "../Cards/CardsContainer";
import "./main.module.scss";

interface IMain {
  avatar: Avatar;
}
const Main: React.FC<IMain> = ({ avatar: { image, alt } }: IMain) => {
  return (
    <main>
      <img src={image} alt={alt} />
      <CardsContainer />
    </main>
  );
};

export default Main;
