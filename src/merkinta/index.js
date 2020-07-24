import React, { useEffect } from "react";
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
import { fetchMerkinnat, postMerkinta } from "../actions";

import Lenkki from "./lenkki";
import Alytehtava from "./alytehtava";
import Erottelu from "./erottelu";
import Kontaktityoskentely from "./kontaktityoskentely";
import Namietsinta from "./namietsinta.js";
import Ilmaisu from "./ilmaisu.js";
import Sosiaalistaminen from "./sosiaalistaminen.js";

function Merkinta({ fetchMerkinnat, postMerkinta, merkinnat }) {
  useEffect(() => {
    fetchMerkinnat(0);
  }, [fetchMerkinnat]);

  function katuLenkki() {
    postMerkinta({ type: "katulenkki" });
  }

  function metsaLenkki() {
    postMerkinta({ type: "metsalenkki" });
  }

  function erottelu() {
    postMerkinta({ type: "erottelu" });
  }

  function ilmaisu() {
    postMerkinta({ type: "ilmaisu" });
  }

  function alytehtava() {
    postMerkinta({ type: "alytehtava" });
  }

  function kontakti() {
    postMerkinta({ type: "kontakti" });
  }

  function namietsinta() {
    postMerkinta({ type: "namietsinta" });
  }

  function sosiaalistaminen() {
    postMerkinta({ type: "sosiaalistaminen" });
  }

  return (
    <>
      <ButtonGroup vertical className="vasen">
        <Button variant="dark" onClick={katuLenkki}>
          lisää katulenkki
        </Button>
        <Button variant="dark" onClick={metsaLenkki}>
          lisää metsälenkki
        </Button>
        <Button variant="dark" onClick={erottelu}>
          lisää erottelu
        </Button>

        <Button variant="dark" onClick={ilmaisu}>
          lisää ilmaisu
        </Button>
      </ButtonGroup>
      <ButtonGroup vertical className="oikea">
        <Button variant="dark" onClick={alytehtava}>
          lisää älytehtävä
        </Button>

        <Button variant="dark" onClick={kontakti}>
          lisää kontaktityöskentely
        </Button>

        <Button variant="dark" onClick={namietsinta}>
          lisää naminetsintä
        </Button>

        <Button variant="dark" onClick={sosiaalistaminen}>
          lisää sosiaalistaminen
        </Button>
      </ButtonGroup>
      <Accordion defaultActiveKey="0">
        {merkinnat.map(merkinta => {
          const eventkey = merkinta.id;
          return (
            <Card key={eventkey}>
              <Card.Header>
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey={eventkey}
                >
                  {merkinta.type} {merkinta.id}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={eventkey}>
                <Card.Body className="acco">
                  {(merkinta.type === "katulenkki" ||
                    merkinta.type === "metsalenkki") && (
                    <Lenkki merkinta={merkinta} />
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
    postMerkinta: params => dispatch(postMerkinta(params)),
    fetchMerkinnat: params => dispatch(fetchMerkinnat(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Merkinta);
