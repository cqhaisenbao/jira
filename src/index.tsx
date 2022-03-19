import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import App from "./App";
import { AppProviders } from "./context";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <AppProviders>
      <App />
    </AppProviders>
  </Provider>,
  document.getElementById("root")
);
