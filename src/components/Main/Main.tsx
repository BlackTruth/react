import * as React from "react";
import { Avatar } from "../../store";
import "./main.module.scss";

interface IMain {
  avatar: Avatar;
}
const Main: React.FC<IMain> = ({ avatar: { image, alt } }: IMain) => {
  return (
    <main>
      <img src={image} alt={alt} />
    </main>
  );
};

export default Main;
