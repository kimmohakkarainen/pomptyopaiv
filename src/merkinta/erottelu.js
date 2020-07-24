import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Nav,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Accordion,
  Card,
  Form
} from "react-bootstrap";
import { postMerkinta } from "../actions";

function Erottelu({ merkinta, postMerkinta }) {
  return <div>tähän erottelyu</div>;
}

function mapStateToProps(state) {
  return {
    katulenkit: state.katulenkit
  };
}

const mapDispatchToProps = dispatch => {
  return {
    postMerkinta: params => dispatch(postMerkinta(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Erottelu);
