import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import RouterApp from "./router";
import store from "./store";
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <RouterApp />
  </Provider>,
  document.getElementById("root")
);
