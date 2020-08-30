import React from "react";
import { connect } from "react-redux";

import "./styles.css";

import Paavalikko from "./paavalikko.js";
import Login from "./login";

function App({ credentials }) {
  return (
    <div className="App">
      {credentials != null && <Paavalikko />}
      {credentials == null && <Login />}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    credentials: state.credentials
  };
}

export default connect(mapStateToProps)(App);
