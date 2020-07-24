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

function Lenkki({ merkinta, merkinnat, postMerkinta }) {
  function kesto(e) {
    const newvalue = Object.assign({}, merkinta, { kesto: e.target.value });
    postMerkinta(newvalue);
  }
  function juoruaminen(e) {
    const newvalue = Object.assign({}, merkinta, {
      Juoruaminen: e.target.value
    });
    postMerkinta(newvalue);
  }
  function UlkoiluLopina(e) {
    const newvalue = Object.assign({}, merkinta, {
      UlkoiluLopina: e.target.value
    });
    postMerkinta(newvalue);
  }
  function OhituksetLenkilla(e) {
    const newvalue = Object.assign({}, merkinta, {
      OhituksetLenkilla: e.target.value
    });
    postMerkinta(newvalue);
  }
  function Rauhoittuminen(e) {
    const newvalue = Object.assign({}, merkinta, {
      Rauhoittuminen: e.target.value
    });
    postMerkinta(newvalue);
  }
  function Arvio(e) {
    const newvalue = Object.assign({}, merkinta, {
      Arvio: e.target.value
    });
    postMerkinta(newvalue);
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>kesto</Form.Label>
          <Form.Control as="select" value={merkinta.kesto} onChange={kesto}>
            <option>0:05</option>
            <option>0:10</option>
            <option>0:15</option>
            <option>0:20</option>
            <option>0:30</option>
            <option>0:40</option>
            <option>0:50</option>
            <option>1:00</option>
            <option>1:10</option>
            <option>1:20</option>
            <option>1:30</option>
            <option>1:40</option>
            <option>1:50</option>
            <option>2:00</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>juoruaminen</Form.Label>
          <Form.Control
            as="select"
            value={merkinta.Juoruaminen}
            onChange={juoruaminen}
          >
            <option>ei ollenkaan</option>
            <option>jonkin verran</option>
            <option>paljon</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>ohitukset</Form.Label>
          <Form.Control
            as="select"
            value={merkinta.OhituksetLenkilla}
            onChange={OhituksetLenkilla}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9+</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>rauhoittuminen pihassa</Form.Label>
          <Form.Control
            as="select"
            value={merkinta.Rauhoittuminen}
            onChange={Rauhoittuminen}
          >
            <option>kyllä</option>
            <option>ei</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
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
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>UlkoiluLopinat</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={merkinta.UlkoiluLopina}
            onChange={UlkoiluLopina}
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
)(Lenkki);
