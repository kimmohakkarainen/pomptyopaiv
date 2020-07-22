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

import { postWorking } from "./actions";
import Eka from "./eka";

function Paavalikko({ postWorking, working }) {
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
      {selected === "1" && <Eka working={working} postWorking={postWorking} />}
      {selected === "2" && <Toka working={working} postWorking={postWorking} />}
      {selected === "3" && (
        <Kolmas working={working} postWorking={postWorking} />
      )}
      <table>
        <tbody>
          {Object.entries(working).map(([key, value]) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Toka({ postWorking, working }) {
  function erottelu(arvio) {
    const t = working.erottelu + arvio;
    postWorking(Object.assign([], working, { erottelu: t }));
  }

  function ilmaisu(arvio) {
    const t = working.ilmaisu + arvio;
    postWorking(Object.assign([], working, { ilmaisu: t }));
  }

  function tekija(arvio) {
    const t = working.tekija + arvio;
    postWorking(Object.assign([], working, { tekija: t }));
  }

  function kontakti(arvio) {
    const t = working.kontakti + arvio;
    postWorking(Object.assign([], working, { kontakti: t }));
  }

  function arvio(arvio) {
    const t = working.arvio + arvio;
    postWorking(Object.assign([], working, { arvio: t }));
  }

  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="danger"
        title="naminetsintää"
      >
        <Dropdown.Item
          onClick={() => {
            const t = working.namietsinta_ulkona + 1;
            postWorking(Object.assign([], working, { namietsinta_ulkona: t }));
          }}
        >
          ulkona
        </Dropdown.Item>

        <Dropdown.Item
          onClick={() => {
            const t = working.namietsinta_sisalla + 1;
            postWorking(Object.assign([], working, { namietsinta_sisalla: t }));
          }}
        >
          sisällä
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="warning"
        title="erottelu"
      >
        <Dropdown.Item onClick={() => erottelu("Keit")}>keittiö</Dropdown.Item>
        <Dropdown.Item onClick={() => erottelu("Oloh")}>olohuone</Dropdown.Item>
        <Dropdown.Item onClick={() => erottelu("Makh")}>
          makuhuone
        </Dropdown.Item>
        <Dropdown.Item onClick={() => erottelu("Etei")}>eteinen</Dropdown.Item>
        <Dropdown.Item onClick={() => erottelu("Parv")}>parveke</Dropdown.Item>
        <Dropdown.Item onClick={() => erottelu("Ainh")}>
          ainon huone
        </Dropdown.Item>
        <Dropdown.Item onClick={() => erottelu("Al-aul")}>
          ala-aula
        </Dropdown.Item>
        <Dropdown.Item onClick={() => erottelu("Kylp")}>
          kylpyhuone
        </Dropdown.Item>
        <Dropdown.Item onClick={() => erottelu("telk")}>
          telkkarihuone
        </Dropdown.Item>
        <Dropdown.Item onClick={() => erottelu("takp")}>takapiha</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="success"
        title="ilmaisu"
      >
        <Dropdown.Item onClick={() => ilmaisu("kansio")}>kansio</Dropdown.Item>
        <Dropdown.Item onClick={() => ilmaisu("laatik")}>
          laatikko
        </Dropdown.Item>
        <Dropdown.Item onClick={() => ilmaisu("ovi")}>ovi</Dropdown.Item>
        <Dropdown.Item onClick={() => ilmaisu("ihmin")}>ihminen</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="primary"
        title="tekijä"
      >
        <Dropdown.Item onClick={() => tekija("Terh")}>Terhi</Dropdown.Item>
        <Dropdown.Item onClick={() => tekija("Kim")}>Kimmo</Dropdown.Item>
        <Dropdown.Item onClick={() => tekija("Ain")}>Aino</Dropdown.Item>
        <Dropdown.Item onClick={() => tekija("Henr")}>Henri</Dropdown.Item>
        <Dropdown.Item onClick={() => tekija("jok muu")}>
          joku muu...
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="dark"
        title="kontaktityösk"
      >
        <Dropdown.Item onClick={() => kontakti("seur")}>seuraa</Dropdown.Item>
        <Dropdown.Item onClick={() => kontakti("seur-ist")}>
          seuraa-istu
        </Dropdown.Item>
        <Dropdown.Item onClick={() => kontakti("kk")}>
          katsekontakti
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="secondary"
        title="arvio"
      >
        <Dropdown.Item onClick={() => arvio("huon")}>huono</Dropdown.Item>
        <Dropdown.Item onClick={() => arvio("koht")}>kohtalainen</Dropdown.Item>
        <Dropdown.Item onClick={() => arvio("ok")}>ok</Dropdown.Item>
        <Dropdown.Item onClick={() => arvio("hyv")}>hyvä</Dropdown.Item>
        <Dropdown.Item onClick={() => arvio("maht")}>mahtava</Dropdown.Item>
      </DropdownButton>
      <Button
        variant="info"
        onClick={() => {
          const t = working.alytehtava + 1;
          postWorking(Object.assign([], working, { alytehtava: t }));
        }}
      >
        älytehtävä
      </Button>{" "}
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>muuta</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={working.tyoskentelylopina}
            onChange={e =>
              postWorking(
                Object.assign([], working, {
                  tyoskentelylopina: e.target.value
                })
              )
            }
          />
        </Form.Group>
      </Form>
    </>
  );
}

function Kolmas({ postWorking, working }) {
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

function mapStateToProps(state) {
  return {
    working: state.working
  };
}

const mapDispatchToProps = dispatch => {
  return {
    postWorking: params => dispatch(postWorking(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paavalikko);
