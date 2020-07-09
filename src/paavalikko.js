import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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

import { fetchWorking, postWorking } from "./actions";

function Paavalikko({ postWorking, working }) {
  const [selected, setSelected] = useState("1");
  console.log(working);
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
              <tr>
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

function Eka({ postWorking, working }) {
  function katuLenkki(min) {
    const t = working.katulenkki + min;
    postWorking(Object.assign([], working, { katulenkki: t }));
  }
  function metsaLenkki(min) {
    const t = working.metsalenkki + min;
    postWorking(Object.assign([], working, { metsalenkki: t }));
  }

  function juoruaminen(arvio) {
    const t = working.juoruaminen + arvio;
    postWorking(Object.assign([], working, { juoruaminen: t }));
  }

  function lenkinArvio(arvio) {
    const t = working.arvio + arvio;
    postWorking(Object.assign([], working, { arvio: t }));
  }

  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="danger"
        title="katulenkki"
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
          const t = working.ohitukset_lenkilla + 1;
          postWorking(Object.assign([], working, { ohitukset_lenkilla: t }));
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
        <Dropdown.Item onClick={() => lenkinArvio("Kohtl")}>
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
          const t = working.rauhoittuminen + 1;
          postWorking(Object.assign([], working, { rauhoittuminen: t }));
        }}
      >
        rauhoittuminen pihassa
      </Button>{" "}
    </>
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
        <Dropdown.Item onClick={() => ilmaisu("laatikko")}>
          laatikko
        </Dropdown.Item>
        <Dropdown.Item onClick={() => ilmaisu("ovi")}>ovi</Dropdown.Item>
        <Dropdown.Item onClick={() => ilmaisu("ihminen")}>
          ihminen
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="primary"
        title="tekijä"
      >
        <Dropdown.Item href="#/action-1">Terhi</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Kimmo</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Aino</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Henri</Dropdown.Item>
        <Dropdown.Item href="#/action-1">joku muu...</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="secondary"
        title="arvio"
      >
        <Dropdown.Item href="#/action-1">huono</Dropdown.Item>
        <Dropdown.Item href="#/action-1">kohtalainen</Dropdown.Item>
        <Dropdown.Item href="#/action-1">ok</Dropdown.Item>
        <Dropdown.Item href="#/action-1">hyvä</Dropdown.Item>
        <Dropdown.Item href="#/action-1">mahtava</Dropdown.Item>
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
    </>
  );
}

function Kolmas({ postWorking, working }) {
  function kesto(min) {
    const t = working.sosiaalistaminen_kesto + min;
    postWorking(Object.assign([], working, { sosiaalistaminen_kesto: t }));
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
        variant="warning"
        title="lenkin arvio"
      >
        <Dropdown.Item href="#/action-1">huono</Dropdown.Item>
        <Dropdown.Item href="#/action-1">kohtalainen</Dropdown.Item>
        <Dropdown.Item href="#/action-1">ok</Dropdown.Item>
        <Dropdown.Item href="#/action-1">hyvä</Dropdown.Item>
        <Dropdown.Item href="#/action-1">mahtava</Dropdown.Item>
      </DropdownButton>
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
