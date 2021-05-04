import * as React from "react";
import { Redirect } from "react-router-dom";
import { mockedLoginCall } from "../../../api/mockedApi";

import { Store } from "../../store";

interface ILogin {
  store: Store;
}

const Login: React.FC<ILogin> = ({ store }: ILogin) => {
  const [logged, setLogged] = React.useState<boolean>(!!store.token);

  const handleSubmit = (event) => {
    event.preventDefault();
    mockedLoginCall().then(({ token }) => {
      store.token = token;
      setLogged(!!token);
    });
  };

  if (logged) {
    return <Redirect to="/profile" />;
  }

  return (
    <form>
      <label>
        Username
        <input />
      </label>
      <label>
        Password
        <input />
      </label>
      <input type="submit" value="Log in" onClick={handleSubmit} />
    </form>
  );
};

export default Login;
