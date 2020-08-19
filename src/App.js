import React from "react";
import { connect } from "react-redux";
import { Jumbotron } from "react-bootstrap";

import "./styles.css";

import Paavalikko from "./paavalikko.js";

function App({ credentials }) {
  return (
    <div className="App">
      {credentials != null && <Paavalikko />}
      {credentials == null && (
        <Jumbotron>
          <h1>not logged in</h1>
        </Jumbotron>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    calendar: state.calendar
  };
}

export default connect(mapStateToProps)(App);
