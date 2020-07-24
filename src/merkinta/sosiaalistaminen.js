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

export default function sosiaalistaminen({ merkinta }) {
  function Ilmaisu(e) {}
  function Arvio(e) {}
  function Hypot(e) {}

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>ilmaisu</Form.Label>
          <Form.Control as="select" value={merkinta.Ilmaisu} onChange={Ilmaisu}>
            <option>kansio</option>
            <option />
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
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>hypohajut</Form.Label>
          <Form.Control as="select" value={merkinta.Hypot} onChange={Hypot}>
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
