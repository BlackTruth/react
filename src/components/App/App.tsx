import { hot } from "react-hot-loader/root";
import * as React from "react";
import { Store } from "../../store";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import styles from "./app.module.scss";

interface IApp {
  userData: Store;
}

const App: React.FC<IApp> = ({ userData: { user, avatar } }: IApp) => {
  return (
    <div className={`${styles.wrapper} ${styles.container}`}>
      <Header user={user} />
      <Main avatar={avatar} />
      <Footer />
    </div>
  );
};

export default hot(App);
