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

function Namietsinta({ merkinta, postMerkinta }) {
  function etsinta(e) {
    const newvalue = Object.assign({}, merkinta, {
      Namietsinta: e.target.value
    });
    postMerkinta(newvalue);
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>namietsintä</Form.Label>
          <Form.Control
            as="select"
            value={merkinta.Namietsinta}
            onChange={etsinta}
          >
            <option default hidden>
              -
            </option>
            <option>sisällä</option>
            <option>ulkona</option>
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
)(Namietsinta);
