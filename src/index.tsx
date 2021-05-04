import * as React from "react";
import { render } from "react-dom";

import App from "./components/App";

import "./index.scss";

import store from "./store";

const rootEl = document.getElementById("app");

render(<App store={store} />, rootEl);
