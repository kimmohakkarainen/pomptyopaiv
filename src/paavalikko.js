import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

import { fetchCalendar, postLogout } from "./actions";

import Merkinta from "./merkinta";
import Yhteenveto from "./yhteenveto";
import Kalenteri from "./kalenteri.js";

function Paavalikko({ fetchCalendar, postLogout, calendar }) {
  const [selected, setSelected] = useState("1");
  const [date, setDate] = useState(null);

  useEffect(() => {
    fetchCalendar();
  }, [fetchCalendar]);

  function onSelectDate(id) {
    setDate(id);
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="tyo">
        <Navbar.Brand className="pop" onClick={() => setDate(null)}>
          <img alt="" src="/pop.png" width="30" height="30" className="tyo" />{" "}
          pöptyöp
        </Navbar.Brand>
        <Nav className="mr-auto" onClick={() => setDate(null)}>
          {date}
        </Nav>
        <Nav>
          <NavDropdown title="      " id="logout">
            <NavDropdown.Item onClick={() => postLogout()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      {date === null && (
        <Kalenteri calendar={calendar} onSelect={onSelectDate} />
      )}
      {date != null && (
        <div>
          <Container fluid className="yla">
            <Nav
              fill
              defaultActiveKey="1"
              onSelect={(eventKey) => setSelected(eventKey)}
            >
              <Nav.Item>
                <Nav.Link className="tab" eventKey="1">
                  Kirjaukset
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="tab" eventKey="2">
                  Yhteenveto
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
          {selected === "1" && <Merkinta date={date} />}
          {selected === "2" && <Yhteenveto date={date} />}
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    calendar: state.calendar
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCalendar: (params) => dispatch(fetchCalendar()),
    postLogout: () => dispatch(postLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paavalikko);
