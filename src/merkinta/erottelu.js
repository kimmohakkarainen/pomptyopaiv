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
  function paikka(e) {
    const newvalue = Object.assign({}, merkinta, {
      Paikka: e.target.value
    });
    postMerkinta(newvalue);
  }
  function Arvio(e) {
    const newvalue = Object.assign({}, merkinta, {
      Arvio: e.target.value
    });
    postMerkinta(newvalue);
  }
  function Hypot(e) {
    const newvalue = Object.assign({}, merkinta, {
      Hypot: e.target.value
    });
    postMerkinta(newvalue);
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>paikka</Form.Label>
          <Form.Control as="select" value={merkinta.Paikka} onChange={paikka}>
            <option default hidden>
              -
            </option>
            <option>keittiö</option>
            <option>olohuone</option>
            <option>makuuhuone</option>
            <option>eteinen</option>
            <option>parveke</option>
            <option>etupiha</option>
            <option>ala-aula</option>
            <option>Ainon huone</option>
            <option>telkkarihuone</option>
            <option>kylpyhuone</option>
            <option>terassi</option>
            <option>takapiha</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>arvio</Form.Label>
          <Form.Control as="select" value={merkinta.Arvio} onChange={Arvio}>
            <option default hidden>
              -
            </option>
            <option>huono</option>
            <option>kohtalainen</option>
            <option>ok</option>
            <option>hyvä</option>
            <option>mahtava</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>hypohajut</Form.Label>
          <Form.Control as="select" value={merkinta.Hypot} onChange={Hypot}>
            <option default hidden>
              -
            </option>
            <option>hypo tyhj</option>
            <option>emt</option>
            <option>häh</option>
            <option>ei tyhjä</option>
            <option>mahtava</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
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
