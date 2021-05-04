import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { Store } from "../../store";

interface IPrivate {
  store: Store;
}

const PrivateRoute: React.FC<IPrivate & RouteProps> = ({
  store,
  ...rest
}: IPrivate & RouteProps) => {
  if (!store.token) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

export default PrivateRoute;
