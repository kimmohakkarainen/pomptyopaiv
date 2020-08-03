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

function Sosiaalistaminen({ merkinta, postMerkinta }) {
  const [lopina, setLopina] = useState(merkinta.Sosiaalistamislopina);

  function kesto(e) {
    const newvalue = Object.assign({}, merkinta, {
      soskesto: e.target.value
    });
    postMerkinta(newvalue);
  }
  function juoruaminen(e) {
    const newvalue = Object.assign({}, merkinta, {
      Juoruaminen: e.target.value
    });
    postMerkinta(newvalue);
  }
  function Arvio(e) {
    const newvalue = Object.assign({}, merkinta, {
      Arvio: e.target.value
    });
    postMerkinta(newvalue);
  }

  function onLopinaFocusOut() {
    const newvalue = Object.assign({}, merkinta, {
      Sosiaalistamislopina: lopina
    });
    console.log("onLopinaFocusOut");
    console.log(newvalue);
    postMerkinta(newvalue);
  }
  function Sosiaalistamislopina(e) {
    const newvalue = Object.assign({}, merkinta, {
      Sosiaalistamislopina: e.target.value
    });
    postMerkinta(newvalue);
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>kesto</Form.Label>
          <Form.Control as="select" value={merkinta.soskesto} onChange={kesto}>
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
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>juoruaminen</Form.Label>
          <Form.Control
            as="select"
            value={merkinta.Juoruaminen}
            onChange={juoruaminen}
          >
            <option default hidden>
              -
            </option>
            <option value="EI">ei ollenkaan</option>
            <option value="JNK">jonkin verran</option>
            <option value="PLJN">paljon</option>
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
)(Sosiaalistaminen);
