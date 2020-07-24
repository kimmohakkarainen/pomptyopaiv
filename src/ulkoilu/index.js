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
      <ButtonGroup vertical>
        <Button
          variant="light"
          className="katlenk"
          onClick={() => {
            addKatulenkki(katulenkit);
          }}
        >
          lisää katulenkki
        </Button>
        <Button
          variant="light"
          className="metslenk"
          onClick={() => {
            addMetsalenkki(metsalenkit);
          }}
        >
          lisää metsälenkki
        </Button>
      </ButtonGroup>
      <Accordion defaultActiveKey="0">
        {katulenkit.map(katulenkki => {
          const eventkey = "k" + katulenkki.id;
          return (
            <Card>
              <Card.Header className="lenk">
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey={eventkey}
                >
                  Katulenkki {katulenkki.id}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={eventkey}>
                <Card.Body className="lenk">
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
              <Card.Header className="lenk">
                <Accordion.Toggle
                  as={Card.Header}
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
