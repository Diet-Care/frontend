import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
