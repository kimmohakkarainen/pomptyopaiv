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

function Yksinolo({ merkinta, postMerkinta }) {
  function kesto(e) {
    const newvalue = Object.assign({}, merkinta, {
      yksinkesto: e.target.value
    });
    postMerkinta(newvalue);
  }
  return (
    <div>
      <Form>
        <Form.Group controlId="yksinkesto">
          <Form.Label>kesto</Form.Label>
          <Form.Control
            as="select"
            value={merkinta.yksinkesto}
            onChange={kesto}
          >
            <option default hidden>
              -
            </option>
            <option value={5}>0:05</option>
            <option value={10}>0:10</option>
            <option value={15}>0:15</option>
            <option value={20}>0:20</option>
            <option value={30}>0:30</option>
            <option value={40}>0:40</option>
            <option value={50}>0:50</option>
            <option value={60}>1:00</option>
            <option value={70}>1:10</option>
            <option value={80}>1:20</option>
            <option value={90}>1:30</option>
            <option value={100}>1:40</option>
            <option value={110}>1:50</option>
            <option value={120}>2:00</option>
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
)(Yksinolo);
