import React from "react";
import ReactDOM from "react-dom";
import Routes from './routes';
import { Provider } from "react-redux";
import store from "./store";
import "./assets/styles/index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>, document.getElementById("root"));
registerServiceWorker();
