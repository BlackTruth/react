import * as React from "react";
import { User } from "../../store";
import "./header.module.scss";

interface IHeader {
  user: User;
}
const Header: React.FC<IHeader> = ({
  user: { firstName, lastName },
}: IHeader) => {
  return <header>{`${firstName} ${lastName}`}</header>;
};

export default Header;
