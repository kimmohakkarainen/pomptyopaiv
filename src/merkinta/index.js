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
import { postMerkinta } from "../actions";

import Lenkki from "./lenkki";
import Alytehtava from "./alytehtava";
import Erottelu from "./erottelu";
import Kontaktityoskentely from "./kontaktityoskentely";
import Namietsinta from "./namietsinta.js";
import Ilmaisu from "./ilmaisu.js";
import Sosiaalistaminen from "./sosiaalistaminen.js";

function Merkinta({ postMerkinta, merkinnat }) {
  const nextId = merkinnat.length + 1;

  function katuLenkki() {
    postMerkinta(merkinnat.concat([{ id: nextId, type: "katulenkki" }]));
  }

  function metsaLenkki() {
    postMerkinta(merkinnat.concat([{ id: nextId, type: "metsalenkki" }]));
  }

  function erottelu() {
    postMerkinta(merkinnat.concat([{ id: nextId, type: "erottelu" }]));
  }

  function ilmaisu() {
    postMerkinta(merkinnat.concat([{ id: nextId, type: "ilmaisu" }]));
  }

  function alytehtava() {
    postMerkinta(merkinnat.concat([{ id: nextId, type: "alytehtava" }]));
  }

  function kontakti() {
    postMerkinta(merkinnat.concat([{ id: nextId, type: "kontakti" }]));
  }

  function namietsinta() {
    postMerkinta(merkinnat.concat([{ id: nextId, type: "namietsinta" }]));
  }

  function sosiaalistaminen() {
    postMerkinta(merkinnat.concat([{ id: nextId, type: "sosiaalistaminen" }]));
  }

  return (
    <>
      <Button onClick={katuLenkki}>lisää katulenkki</Button>
      <Button onClick={metsaLenkki}>lisää metsälenkki</Button>
      <Button onClick={erottelu}>lisää erottelu</Button>

      <Button onClick={ilmaisu}>lisää ilmaisu</Button>

      <Button onClick={alytehtava}>lisää älytehtävä</Button>

      <Button onClick={kontakti}>lisää kontaktityöskentely</Button>

      <Button onClick={namietsinta}>lisää naminetsintä</Button>

      <Button onClick={sosiaalistaminen}>lisää sosiaalistaminen</Button>

      <Accordion defaultActiveKey="0">
        {merkinnat.map(merkinta => {
          const eventkey = merkinta.id;
          return (
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={eventkey}
                >
                  {merkinta.type} {merkinta.id}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={eventkey}>
                <Card.Body>
                  {(merkinta.type === "katulenkki" ||
                    merkinta.type === "metsalenkki") && (
                    <Lenkki katulenkki={merkinta} />
                  )}
                  {merkinta.type === "alytehtava" && (
                    <Alytehtava merkinta={merkinta} />
                  )}
                  {merkinta.type === "erottelu" && (
                    <Erottelu merkinta={merkinta} />
                  )}

                  {merkinta.type === "kontakti" && (
                    <Kontaktityoskentely merkinta={merkinta} />
                  )}

                  {merkinta.type === "namietsinta" && (
                    <Namietsinta merkinta={merkinta} />
                  )}

                  {merkinta.type === "ilmaisu" && (
                    <Ilmaisu merkinta={merkinta} />
                  )}
                  {merkinta.type === "sosiaalistaminen" && (
                    <Sosiaalistaminen merkinta={merkinta} />
                  )}
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
    merkinnat: state.merkinnat
  };
}

const mapDispatchToProps = dispatch => {
  return {
    postMerkinta: params => dispatch(postMerkinta(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Merkinta);
