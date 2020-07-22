import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Nav,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Form
} from "react-bootstrap";

export default function Kolmas({ postWorking, working }) {
  function kesto(min) {
    const t = working.sosiaalistaminen_kesto + min;
    postWorking(Object.assign([], working, { sosiaalistaminen_kesto: t }));
  }

  function sosarvio(arvio) {
    const t = working.sosiaalistamisenarvio + arvio;
    postWorking(Object.assign([], working, { sosiaalistamisenarvio: t }));
  }

  function sos(arvio) {
    const t = working.sosiaalistettavat + arvio;
    postWorking(Object.assign([], working, { sosiaalistettavat: t }));
  }

  return (
    <>
      <Button
        variant="success"
        onClick={() => {
          const t = working.ohituksia_sosiaalistamisessa + 1;
          postWorking(
            Object.assign([], working, {
              ohituksia_sosiaalistamisessa: t
            })
          );
        }}
      >
        ohituksia
      </Button>

      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="danger"
        title="kesto"
      >
        <Dropdown.Item onClick={() => kesto(10)}>0:10</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(15)}>0:15</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(20)}>0:20</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(30)}>0:30</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(40)}>0:40</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(50)}>0:50</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(60)}>0:60</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(70)}>1:10</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(80)}>1:20</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(90)}>1:30</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(100)}>1:40</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(110)}>1:50</Dropdown.Item>
        <Dropdown.Item onClick={() => kesto(120)}>2:00</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="secondary"
        title="sosiaalistettavat"
      >
        <Dropdown.Item onClick={() => sos("PikAut")}>pieni auto</Dropdown.Item>
        <Dropdown.Item onClick={() => sos("IsAut")}>iso auto</Dropdown.Item>
        <Dropdown.Item onClick={() => sos("Kis")}>kissa</Dropdown.Item>
        <Dropdown.Item onClick={() => sos("Peur")}>peura</Dropdown.Item>
        <Dropdown.Item onClick={() => sos("lint")}>lintu</Dropdown.Item>
        <Dropdown.Item onClick={() => sos("jänö")}>jänis</Dropdown.Item>
        <Dropdown.Item onClick={() => sos("PikKoir")}>
          pieni koira
        </Dropdown.Item>
        <Dropdown.Item onClick={() => sos("KeskKoir")}>
          kesk. koira
        </Dropdown.Item>
        <Dropdown.Item onClick={() => sos("IsKoir")}>iso koira</Dropdown.Item>
        <Dropdown.Item onClick={() => sos("lap")}>lapsi</Dropdown.Item>
        <Dropdown.Item onClick={() => sos("aik")}>aikuinen</Dropdown.Item>
        <Dropdown.Item onClick={() => sos("vanh")}>vanhus</Dropdown.Item>
        <Dropdown.Item onClick={() => sos("lait")}>laite</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="warning"
        title="arvio"
      >
        <Dropdown.Item onClick={() => sosarvio("huon")}>huono</Dropdown.Item>
        <Dropdown.Item onClick={() => sosarvio("koht")}>
          kohtalainen
        </Dropdown.Item>
        <Dropdown.Item onClick={() => sosarvio("ok")}>ok</Dropdown.Item>
        <Dropdown.Item onClick={() => sosarvio("hyv")}>hyvä</Dropdown.Item>
        <Dropdown.Item onClick={() => sosarvio("maht")}>mahtava</Dropdown.Item>
      </DropdownButton>

      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>muuta sosiaalistamisesta</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={working.sosiaalistamislopina}
            onChange={e =>
              postWorking(
                Object.assign([], working, {
                  sosiaalistamislopina: e.target.value
                })
              )
            }
          />
        </Form.Group>
      </Form>
    </>
  );
}
