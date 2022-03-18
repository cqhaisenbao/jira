import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import App from "./App";
import { AppProviders } from "./context";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);
