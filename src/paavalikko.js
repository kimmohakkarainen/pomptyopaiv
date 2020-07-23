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
import Ulkoilu from "./ulkoilu";
import Merkinta from "./merkinta";
import Toka from "./toka";
import Kolmas from "./kolmas";

function Paavalikko({ postWorking, working, katulenkit, metsalenkit }) {
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
      {selected === "1" && (
        <Merkinta working={working} postWorking={postWorking} />
      )}
      {selected === "2" && <Toka working={working} postWorking={postWorking} />}
      {selected === "3" && (
        <Kolmas working={working} postWorking={postWorking} />
      )}
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
