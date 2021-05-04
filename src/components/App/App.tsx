import { hot } from "react-hot-loader/root";
import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store } from "../../store";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Profile from "../Profile";
import Login from "../Login";
import PrivateRoute from "../PrivateRoute";
import styles from "./app.module.scss";

interface ICardsApp {
  userData: Store;
}

interface IApp {
  store: Store;
}

const CardsApp: React.FC<ICardsApp> = ({
  userData: { user, avatar },
}: ICardsApp) => {
  return (
    <div className={`${styles.wrapper} ${styles.container}`}>
      <Header user={user} />
      <Main avatar={avatar} />
      <Footer />
    </div>
  );
};

const App: React.FC<IApp> = ({ store }) => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login store={store} />
        </Route>
        <PrivateRoute store={store} path="/profile" component={Profile} />
        <PrivateRoute store={store} path="/cards">
          <CardsApp userData={store} />
        </PrivateRoute>
        <PrivateRoute store={store} path="*" />
      </Switch>
    </Router>
  );
};

export default hot(App);
