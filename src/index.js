import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import pompState from "./reducers";
import App from "./App";

const store = createStore(
  pompState,
  composeWithDevTools(applyMiddleware(thunk))
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
