import React from "react";
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

export default function Metsalenkki({ juoruaminen }) {
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>kesto</Form.Label>
          <Form.Control as="select">
            <option>0:05</option>
            <option>0:10</option>
            <option>0:15</option>
            <option>0:20</option>
            <option>0:30</option>
            <option>0:40</option>
            <option>0:50</option>
            <option>0:60</option>
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
          <Form.Control as="select">
            <option>ei ollenkaan</option>
            <option>jonkin verran</option>
            <option>paljon</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>ohitukset</Form.Label>
          <Form.Control as="select">
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
          <Form.Control as="select">
            <option>kyllä</option>
            <option>ei</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>arvio</Form.Label>
          <Form.Control as="select">
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
