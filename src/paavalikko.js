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
      {selected === "1" && <Eka />}
      {selected === "2" && <Toka working={working} postWorking={postWorking} />}
      {selected === "3" && <Kolmas />}
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

function Eka() {
  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="danger"
        title="katulenkki"
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
        title="metsälenkki"
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
        <Dropdown.Item href="#/action-1">jonkin verran</Dropdown.Item>
        <Dropdown.Item href="#/action-1">paljon</Dropdown.Item>
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

      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="secondary"
        title="rauhoittuminen pihassa"
      >
        <Dropdown.Item href="#/action-1">kyllä</Dropdown.Item>
        <Dropdown.Item href="#/action-1">ei</Dropdown.Item>
      </DropdownButton>
    </>
  );
}

function Toka({ postWorking, working }) {
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
        <Dropdown.Item href="#/action-1">sisällä</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="warning"
        title="erottelu"
      >
        <Dropdown.Item href="#/action-1">keittiö</Dropdown.Item>
        <Dropdown.Item href="#/action-1">olohuone</Dropdown.Item>
        <Dropdown.Item href="#/action-1">makuhuone</Dropdown.Item>
        <Dropdown.Item href="#/action-1">eteinen</Dropdown.Item>
        <Dropdown.Item href="#/action-1">parveke</Dropdown.Item>
        <Dropdown.Item href="#/action-1">ainon huone</Dropdown.Item>
        <Dropdown.Item href="#/action-1">ala-aula</Dropdown.Item>
        <Dropdown.Item href="#/action-1">kylpyhuone</Dropdown.Item>
        <Dropdown.Item href="#/action-1">telkkarihuone</Dropdown.Item>
        <Dropdown.Item href="#/action-1">takapiha</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="success"
        title="erottelu"
      >
        <Dropdown.Item href="#/action-1">kansio</Dropdown.Item>
        <Dropdown.Item href="#/action-1">laatikko</Dropdown.Item>
        <Dropdown.Item href="#/action-1">ovi</Dropdown.Item>
        <Dropdown.Item href="#/action-1">ihminen</Dropdown.Item>
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

function Kolmas() {
  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="success"
        title="koiria"
      >
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-1">2</Dropdown.Item>
        <Dropdown.Item href="#/action-1">3</Dropdown.Item>
        <Dropdown.Item href="#/action-1">4</Dropdown.Item>
        <Dropdown.Item href="#/action-1">5</Dropdown.Item>
        <Dropdown.Item href="#/action-1">6</Dropdown.Item>
        <Dropdown.Item href="#/action-1">7</Dropdown.Item>
        <Dropdown.Item href="#/action-1">8</Dropdown.Item>
        <Dropdown.Item href="#/action-1">9</Dropdown.Item>
        <Dropdown.Item href="#/action-1">10</Dropdown.Item>
        <Dropdown.Item href="#/action-1">11</Dropdown.Item>
        <Dropdown.Item href="#/action-1">12+</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="danger"
        title="kesto"
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
