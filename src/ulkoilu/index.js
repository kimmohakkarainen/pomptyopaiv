import React from "react";
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

export default function Ulkoilu({ postWorking, working }) {
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
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Metsälenkki
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <DropdownButton
                as={ButtonGroup}
                id="dropdown-basic-button"
                variant="danger"
                title="kesto"
              >
                <Dropdown.Item onClick={() => katuLenkki(10)}>
                  0:10
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(15)}>
                  0:15
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(20)}>
                  0:20
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(30)}>
                  0:30
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(40)}>
                  0:40
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(50)}>
                  0:50
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(60)}>
                  0:60
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(70)}>
                  1:10
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(80)}>
                  1:20
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(90)}>
                  1:30
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(100)}>
                  1:40
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(110)}>
                  1:50
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(120)}>
                  2:00
                </Dropdown.Item>
              </DropdownButton>
              <Button
                variant="warning"
                onClick={() => {
                  const t = working.OhituksetLenkilla + 1;
                  postWorking(
                    Object.assign([], working, { OhituksetLenkilla: t })
                  );
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
                <Dropdown.Item onClick={() => lenkinArvio("Huon")}>
                  huono
                </Dropdown.Item>
                <Dropdown.Item onClick={() => lenkinArvio("Koht")}>
                  kohtalainen
                </Dropdown.Item>
                <Dropdown.Item onClick={() => lenkinArvio("Ok")}>
                  ok
                </Dropdown.Item>
                <Dropdown.Item onClick={() => lenkinArvio("Hyv")}>
                  hyvä
                </Dropdown.Item>
                <Dropdown.Item onClick={() => lenkinArvio("Maht")}>
                  mahtava
                </Dropdown.Item>
              </DropdownButton>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              katulenkki
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <DropdownButton
                as={ButtonGroup}
                id="dropdown-basic-button"
                variant="danger"
                title="kesto"
              >
                <Dropdown.Item onClick={() => katuLenkki(10)}>
                  0:10
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(15)}>
                  0:15
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(20)}>
                  0:20
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(30)}>
                  0:30
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(40)}>
                  0:40
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(50)}>
                  0:50
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(60)}>
                  0:60
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(70)}>
                  1:10
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(80)}>
                  1:20
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(90)}>
                  1:30
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(100)}>
                  1:40
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(110)}>
                  1:50
                </Dropdown.Item>
                <Dropdown.Item onClick={() => katuLenkki(120)}>
                  2:00
                </Dropdown.Item>
              </DropdownButton>
              <Button
                variant="warning"
                onClick={() => {
                  const t = working.OhituksetLenkilla + 1;
                  postWorking(
                    Object.assign([], working, { OhituksetLenkilla: t })
                  );
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
                <Dropdown.Item onClick={() => lenkinArvio("Huon")}>
                  huono
                </Dropdown.Item>
                <Dropdown.Item onClick={() => lenkinArvio("Koht")}>
                  kohtalainen
                </Dropdown.Item>
                <Dropdown.Item onClick={() => lenkinArvio("Ok")}>
                  ok
                </Dropdown.Item>
                <Dropdown.Item onClick={() => lenkinArvio("Hyv")}>
                  hyvä
                </Dropdown.Item>
                <Dropdown.Item onClick={() => lenkinArvio("Maht")}>
                  mahtava
                </Dropdown.Item>
              </DropdownButton>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              katulenkki
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
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
                    <option>0;50</option>
                    <option>0:60</option>
                    <option>1:00</option>
                    <option>1:10</option>
                    <option>1:20</option>
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
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}
