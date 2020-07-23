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
import Toka from "./toka";
import Kolmas from "./kolmas";

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
      {selected === "1" && (
        <Ulkoilu working={working} postWorking={postWorking} />
      )}
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
