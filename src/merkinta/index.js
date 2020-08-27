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
  Card,
  Container
} from "react-bootstrap";
import { fetchMerkinnat, postMerkinta } from "../actions";

import Lenkki from "./lenkki";
import Alytehtava from "./alytehtava";
import Erottelu from "./erottelu";
import Kontaktityoskentely from "./kontaktityoskentely";
import Namietsinta from "./namietsinta.js";
import Ilmaisu from "./ilmaisu.js";
import Sosiaalistaminen from "./sosiaalistaminen.js";
import Yksinolo from "./yksinolo.js";

const MERKINTALOOKUP = {
  metsalenkki: "metsälenkki",
  katulenkki: "katulenkki",
  namietsintasis: "namietsintä sisällä",
  namietsintaulk: "namietsintä ulkona",
  ilmaisu: "ilmaisu",
  erottelu: "erottelu",
  kontakti: "kontakti",
  alytehtava: "älytehtävä",
  sosiaalistaminen: "sosiaalistaminen",
  yksinolo: "yksin olo"
};

const NONOPENING = {
  namietsintasis: true,
  namietsintaulk: true,
  alytehtava: true
};

function Merkinta({ fetchMerkinnat, postMerkinta, merkinnat, date }) {
  useEffect(() => {
    console.log("fetchMerkinnat " + date);
    fetchMerkinnat(date);
  }, [fetchMerkinnat, date]);

  function katuLenkki() {
    postMerkinta({ type: "katulenkki", date: date });
  }

  function metsaLenkki() {
    postMerkinta({ type: "metsalenkki", date: date });
  }

  function erottelu() {
    postMerkinta({ type: "erottelu", date: date });
  }

  function ilmaisu() {
    postMerkinta({ type: "ilmaisu", date: date });
  }

  function alytehtava() {
    postMerkinta({ type: "alytehtava", date: date });
  }

  function kontakti() {
    postMerkinta({ type: "kontakti", date: date });
  }

  function namietsintasisalla() {
    postMerkinta({
      type: "namietsintasis",
      Namietsinta: "sisällä",
      date: date
    });
  }

  function namietsintaulkona() {
    postMerkinta({ type: "namietsintaulk", Namietsinta: "ulkona", date: date });
  }

  function sosiaalistaminen() {
    postMerkinta({
      type: "sosiaalistaminen",
      date: date
    });
  }

  function yksinolo() {
    postMerkinta({
      type: "yksinolo",
      date: date
    });
  }
  return (
    <>
      <Container>
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
          <Button variant="dark" onClick={alytehtava}>
            lisää älytehtävä
          </Button>

          <Button variant="dark" onClick={kontakti}>
            lisää kontaktityöskentely
          </Button>

          <Button variant="dark" onClick={namietsintasisalla}>
            lisää naminetsintä sisällä
          </Button>

          <Button variant="dark" onClick={namietsintaulkona}>
            lisää naminetsintä ulkona
          </Button>

          <Button variant="dark" onClick={sosiaalistaminen}>
            lisää sosiaalistaminen
          </Button>
          <Button variant="dark" onClick={yksinolo}>
            lisää yksinolo
          </Button>
        </ButtonGroup>
      </Container>
      <Accordion defaultActiveKey="0">
        {merkinnat.map((merkinta) => {
          const eventkey = merkinta.id;
          return (
            <div key={eventkey}>
              {NONOPENING[merkinta.type] && (
                <Card key={eventkey}>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Card.Header}
                      variant="link"
                      eventKey={eventkey}
                    >
                      {MERKINTALOOKUP[merkinta.type]}
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
              )}
              {!NONOPENING[merkinta.type] && (
                <Card key={eventkey}>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Card.Header}
                      variant="link"
                      eventKey={eventkey}
                    >
                      {MERKINTALOOKUP[merkinta.type]}
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

                      {merkinta.type === "ilmaisu" && (
                        <Ilmaisu merkinta={merkinta} />
                      )}
                      {merkinta.type === "sosiaalistaminen" && (
                        <Sosiaalistaminen merkinta={merkinta} />
                      )}
                      {merkinta.type === "yksinolo" && (
                        <Yksinolo merkinta={merkinta} />
                      )}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )}
            </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    postMerkinta: (params) => dispatch(postMerkinta(params)),
    fetchMerkinnat: (params) => dispatch(fetchMerkinnat(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Merkinta);
