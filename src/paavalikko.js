import React, { useState } from "react";
import {
  Jumbotron,
  Badge,
  Button,
  Nav,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Form
} from "react-bootstrap";

export default function Paavalikko() {
  const [selected, setSelected] = useState("1");

  return (
    <div>
      <Nav
        fill
        variant="tabs"
        defaultActiveKey="1"
        onSelect={eventKey => setSelected(eventKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="1">ulkoilu</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2">työskentely</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3">sosiaalistaminen</Nav.Link>
        </Nav.Item>
      </Nav>
      {selected === "1" && <Eka />}
      {selected === "2" && <Toka />}
      {selected === "3" && <Kolmas />}
    </div>
  );
}

function Eka() {
  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="danger"
        title="katulenkki (min)"
      >
        <Dropdown.Item href="#/action-1">0:10</Dropdown.Item>
        <Dropdown.Item href="#/action-2">0:15</Dropdown.Item>
        <Dropdown.Item href="#/action-3">0:20</Dropdown.Item>
        <Dropdown.Item href="#/action-3">0:30</Dropdown.Item>
        <Dropdown.Item href="#/action-3">0:40</Dropdown.Item>
        <Dropdown.Item href="#/action-3">0:50</Dropdown.Item>
        <Dropdown.Item href="#/action-3">0:60</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1:10</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1:20</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1:30</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1:40</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1:50</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2:00+</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="info"
        title="metsälenkki (min)"
      >
        <Dropdown.Item href="#/action-1">0:10</Dropdown.Item>
        <Dropdown.Item href="#/action-2">0:15</Dropdown.Item>
        <Dropdown.Item href="#/action-3">0:20</Dropdown.Item>
        <Dropdown.Item href="#/action-3">0:30</Dropdown.Item>
        <Dropdown.Item href="#/action-3">0:40</Dropdown.Item>
        <Dropdown.Item href="#/action-3">0:50</Dropdown.Item>
        <Dropdown.Item href="#/action-3">0:60</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1:10</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1:20</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1:30</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1:40</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1:50</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2:00+</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="warning"
        title="koirien ohitukset"
      >
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-1">2</Dropdown.Item>
        <Dropdown.Item href="#/action-1">3</Dropdown.Item>
        <Dropdown.Item href="#/action-1">4</Dropdown.Item>
        <Dropdown.Item href="#/action-1">5</Dropdown.Item>
        <Dropdown.Item href="#/action-1">6</Dropdown.Item>
        <Dropdown.Item href="#/action-1">7</Dropdown.Item>
        <Dropdown.Item href="#/action-1">8+</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="dark"
        title="juoruaminen"
      >
        <Dropdown.Item href="#/action-1">ei ollenkaan</Dropdown.Item>
        <Dropdown.Item href="#/action-1">vähän</Dropdown.Item>
        <Dropdown.Item href="#/action-1">vähän enemmän</Dropdown.Item>
        <Dropdown.Item href="#/action-1">melko paljon</Dropdown.Item>
        <Dropdown.Item href="#/action-1">paljon</Dropdown.Item>
        <Dropdown.Item href="#/action-1">kokoajan</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="light"
        title="lenkin arvio"
      >
        <Dropdown.Item href="#/action-1">huono</Dropdown.Item>
        <Dropdown.Item href="#/action-1">kohtalainen</Dropdown.Item>
        <Dropdown.Item href="#/action-1">ok</Dropdown.Item>
        <Dropdown.Item href="#/action-1">hyvä</Dropdown.Item>
        <Dropdown.Item href="#/action-1">mahtava</Dropdown.Item>
      </DropdownButton>

      <Form>
        <Form.Group id="radio-group">
          <Form.Check
            type="radio"
            id="radio-1"
            name="radios"
            label="rauhoittuminen pihassa"
          />
          <Form.Check
            type="radio"
            id="radio-2"
            name="radios"
            label="ei rauhoittumista"
          />
        </Form.Group>
      </Form>
    </>
  );
}

function Toka() {
  return (
    <Jumbotron>
      <h1>Toka</h1>
    </Jumbotron>
  );
}

function Kolmas() {
  return (
    <Jumbotron>
      <h1>Kolmas</h1>
    </Jumbotron>
  );
}
