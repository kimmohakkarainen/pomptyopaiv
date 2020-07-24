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

function Ilmaisu({ merkinta, postMerkinta }) {
  function Ilmaisu(e) {}
  function Arvio(e) {}
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>ilmaisu</Form.Label>
          <Form.Control as="select" value={merkinta.Ilmaisu} onChange={Ilmaisu}>
            <option>kansio</option>
            <option>laatikko</option>
            <option>ovi</option>
            <option>ihminen</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>arvio</Form.Label>
          <Form.Control as="select" value={merkinta.Arvio} onChange={Arvio}>
            <option>huono</option>
            <option>kohtalainen</option>
            <option>ok</option>
            <option>hyvä</option>
            <option>mahtava</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    merkinnat: state.merkinnat
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
)(Ilmaisu);
