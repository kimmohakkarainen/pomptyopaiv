import React, { useState } from "react";
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
  const [lopina, setLopina] = useState(merkinta.UlkoiluLopina);

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

  function onLopinaFocusOut() {
    const newvalue = Object.assign({}, merkinta, {
      UlkoiluLopina: lopina
    });
    console.log("onLopinaFocusOut");
    console.log(newvalue);
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
        <Form.Group controlId="lenkki.rauhoittuminen">
          <Form.Label>rauhoittuminen pihassa</Form.Label>
          <Form.Control
            as="select"
            value={merkinta.Rauhoittuminen}
            onChange={Rauhoittuminen}
          >
            <option default hidden>
              -
            </option>
            <option>kyllä</option>
            <option>ei</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="lenkki.kesto">
          <Form.Label>kesto</Form.Label>
          <Form.Control as="select" value={merkinta.kesto} onChange={kesto}>
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
        <Form.Group controlId="lenkki.juoruaminen">
          <Form.Label>juoruaminen</Form.Label>
          <Form.Control
            as="select"
            value={merkinta.Juoruaminen}
            onChange={juoruaminen}
          >
            <option default hidden>
              -
            </option>
            <option>ei ollenkaan</option>
            <option>jonkin verran</option>
            <option>paljon</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="lenkki.ohitukset">
          <Form.Label>ohitukset</Form.Label>
          <Form.Control
            as="select"
            value={merkinta.OhituksetLenkilla}
            onChange={OhituksetLenkilla}
          >
            <option default hidden>
              -
            </option>
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
        <Form.Group controlId="lenkki.arvio">
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
        <Form.Group controlId="lenkki.muuta">
          <Form.Label>muuta</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={lopina}
            onChange={e => setLopina(e.target.value)}
            onBlur={onLopinaFocusOut}
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
