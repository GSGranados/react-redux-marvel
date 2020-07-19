import React from "react";
import ReactDOM from "react-dom";
//STYLES
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
//GENERAL IMPORTS
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//REDUX IMPORTS
import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
//Middlewares
import thunk from 'redux-thunk';
//Extensions
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(allReducers,composeWithDevTools(
  applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
