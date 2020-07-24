import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Nav,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Form,
  Navbar,
  Container
} from "react-bootstrap";

import { postWorking } from "./actions";
import Ulkoilu from "./ulkoilu";
import Toka from "./toka";
import Kolmas from "./kolmas";
import Yhteenveto from "./yhteenveto";

function Paavalikko({ postWorking, working, katulenkit, metsalenkit }) {
  const [selected, setSelected] = useState("1");
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="tyo">
        <Navbar.Brand className="pop" href="#home">
          <img alt="" src="pop.png" width="30" height="30" className="tyo" />{" "}
          pöptyöp
        </Navbar.Brand>
      </Navbar>{" "}
      <Container fluid className="yla">
        <Nav
          fill
          defaultActiveKey="1"
          onSelect={eventKey => setSelected(eventKey)}
        >
          <Nav.Item>
            <Nav.Link className="Kirjaukset" eventKey="1">
              Kirjaukset
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="yhteenveto" eventKey="2">
              Yhteenveto
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      {selected === "1" && (
        <Ulkoilu working={working} postWorking={postWorking} />
      )}
      {selected === "2" && (
        <Yhteenveto working={working} postWorking={postWorking} />
      )}
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

function mapStateToProps(state) {
  return {
    working: state.working,
    metsalenkit: state.metsalenkit,
    katulenkit: state.katulenkit
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
