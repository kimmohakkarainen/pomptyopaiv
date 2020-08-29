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
            <option value={15}>0:15</option>
            <option value={30}>0:30</option>
            <option value={45}>0:45</option>
            <option value={60}>1:00</option>
            <option value={90}>1:30</option>
            <option value={120}>2:00</option>
            <option value={150}>2:30</option>
            <option value={180}>3:00</option>
            <option value={210}>3:30</option>
            <option value={240}>4:00</option>
            <option value={270}>4:30</option>
            <option value={300}>5:00</option>
            <option value={330}>5:30</option>
            <option value={360}>6:00</option>
            <option value={390}>6:30</option>
            <option value={420}>7:00</option>
            <option value={450}>7:30</option>
            <option value={480}>8:00</option>
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

const mapDispatchToProps = (dispatch) => {
  return {
    postMerkinta: (params) => dispatch(postMerkinta(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Yksinolo);
