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

function Kontaktityoskentely({ merkinta, postMerkinta }) {
  function Kontakti(e) {
    const newvalue = Object.assign({}, merkinta, {
      Kontakti: e.target.value
    });
    postMerkinta(newvalue);
  }
  function Arvio(e) {
    const newvalue = Object.assign({}, merkinta, {
      Arvio: e.target.value
    });
    postMerkinta(newvalue);
  }
  function KontaktiLopina(e) {
    const newvalue = Object.assign({}, merkinta, {
      KontaktiLopina: e.target.value
    });
    postMerkinta(newvalue);
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>kontaktityöskentely</Form.Label>
          <Form.Control
            as="select"
            value={merkinta.Kontakti}
            onChange={Kontakti}
          >
            <option default hidden>
              -
            </option>
            <option>seuraaminen</option>
            <option>katsekontakti</option>
            <option>seuraa-istu</option>
            <option>muu</option>
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
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>muuta</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={merkinta.KontaktiLopina}
            onChange={KontaktiLopina}
          />
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
)(Kontaktityoskentely);
