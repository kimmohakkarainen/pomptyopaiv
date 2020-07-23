import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Nav,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Form,
  Accordion,
  Card
} from "react-bootstrap";
import { postWorking, addMetsalenkki, addKatulenkki } from "../actions";

import Katulenkki from "./katulenkki";
import Metsalenkki from "./metsalenkki";

function Ulkoilu({
  postWorking,
  working,
  metsalenkit,
  katulenkit,
  addMetsalenkki,
  addKatulenkki
}) {
  function katuLenkki(min) {
    const t = working.Katulenkki + min;
    postWorking(Object.assign([], working, { Katulenkki: t }));
  }
  function metsaLenkki(min) {
    const t = working.Metsalenkki + min;
    postWorking(Object.assign([], working, { Metsalenkki: t }));
  }

  function juoruaminen(arvio) {
    const t = working.Juoruaminen + arvio;
    postWorking(Object.assign([], working, { Juoruaminen: t }));
  }

  function lenkinArvio(arvio) {
    const t = working.LenkinArvio + arvio;
    postWorking(Object.assign([], working, { LenkinArvio: t }));
  }

  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="danger"
        title="kesto"
      >
        <Dropdown.Item onClick={() => katuLenkki(10)}>0:10</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(15)}>0:15</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(20)}>0:20</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(30)}>0:30</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(40)}>0:40</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(50)}>0:50</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(60)}>0:60</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(70)}>1:10</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(80)}>1:20</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(90)}>1:30</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(100)}>1:40</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(110)}>1:50</Dropdown.Item>
        <Dropdown.Item onClick={() => katuLenkki(120)}>2:00</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="info"
        title="metsälenkki"
      >
        <Dropdown.Item onClick={() => metsaLenkki(10)}>0:10</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(15)}>0:15</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(20)}>0:20</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(30)}>0:30</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(40)}>0:40</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(50)}>0:50</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(60)}>0:60</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(70)}>1:10</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(80)}>1:20</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(90)}>1:30</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(100)}>1:40</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(110)}>1:50</Dropdown.Item>
        <Dropdown.Item onClick={() => metsaLenkki(120)}>2:00</Dropdown.Item>
      </DropdownButton>
      <Button
        variant="warning"
        onClick={() => {
          const t = working.OhituksetLenkilla + 1;
          postWorking(Object.assign([], working, { OhituksetLenkilla: t }));
        }}
      >
        ohitukset lenkillä
      </Button>{" "}
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="dark"
        title="juoruaminen"
      >
        <Dropdown.Item onClick={() => juoruaminen("Ei")}>
          ei ollenkaan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => juoruaminen("Jnkv")}>
          jonkin verran
        </Dropdown.Item>
        <Dropdown.Item onClick={() => juoruaminen("Palj")}>
          paljon
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="light"
        title="lenkin arvio"
      >
        <Dropdown.Item onClick={() => lenkinArvio("Huon")}>huono</Dropdown.Item>
        <Dropdown.Item onClick={() => lenkinArvio("Koht")}>
          kohtalainen
        </Dropdown.Item>
        <Dropdown.Item onClick={() => lenkinArvio("Ok")}>ok</Dropdown.Item>
        <Dropdown.Item onClick={() => lenkinArvio("Hyv")}>hyvä</Dropdown.Item>
        <Dropdown.Item onClick={() => lenkinArvio("Maht")}>
          mahtava
        </Dropdown.Item>
      </DropdownButton>
      <Button
        variant="secondary"
        onClick={() => {
          const t = working.Rauhoittuminen + 1;
          postWorking(Object.assign([], working, { Rauhoittuminen: t }));
        }}
      >
        rauhoittuminen pihassa
      </Button>{" "}
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>muuta</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={working.UlkoiluLopina}
            onChange={e =>
              postWorking(
                Object.assign([], working, { UlkoiluLopina: e.target.value })
              )
            }
          />
        </Form.Group>
      </Form>
      <Button
        onClick={() => {
          addKatulenkki(katulenkit);
        }}
      >
        lisää katulenkki
      </Button>
      <Button
        onClick={() => {
          addMetsalenkki(metsalenkit);
        }}
      >
        lisää metsälenkki
      </Button>
      <Accordion defaultActiveKey="0">
        {katulenkit.map(katulenkki => {
          const eventkey = "k" + katulenkki.id;
          return (
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={eventkey}
                >
                  Katulenkki {katulenkki.id}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={eventkey}>
                <Card.Body>
                  <Katulenkki
                    juoruaminen={juoruaminen}
                    katulenkki={katulenkki}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
        {metsalenkit.map(metsalenkki => {
          const eventkey = "m" + metsalenkki.id;
          return (
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={eventkey}
                >
                  Metsälenkki {metsalenkki.id}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={eventkey}>
                <Card.Body>
                  <Metsalenkki
                    juoruaminen={juoruaminen}
                    katulenkki={metsalenkki}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </>
  );
}

function mapStateToProps(state) {
  return {
    metsalenkit: state.metsalenkit,
    katulenkit: state.katulenkit
  };
}

const mapDispatchToProps = dispatch => {
  return {
    postWorking: params => dispatch(postWorking(params)),
    addMetsalenkki: params => dispatch(addMetsalenkki(params)),
    addKatulenkki: params => dispatch(addKatulenkki(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ulkoilu);
