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

export default function Toka({ postWorking, working }) {
  function erottelu(arvio) {
    const t = working.erottelu + arvio;
    postWorking(Object.assign([], working, { erottelu: t }));
  }

  function ilmaisu(arvio) {
    const t = working.ilmaisu + arvio;
    postWorking(Object.assign([], working, { ilmaisu: t }));
  }

  function tekija(arvio) {
    const t = working.tekija + arvio;
    postWorking(Object.assign([], working, { tekija: t }));
  }

  function kontakti(arvio) {
    const t = working.kontakti + arvio;
    postWorking(Object.assign([], working, { kontakti: t }));
  }

  function arvio(arvio) {
    const t = working.arvio + arvio;
    postWorking(Object.assign([], working, { arvio: t }));
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
        <Dropdown.Item onClick={() => ilmaisu("laatik")}>
          laatikko
        </Dropdown.Item>
        <Dropdown.Item onClick={() => ilmaisu("ovi")}>ovi</Dropdown.Item>
        <Dropdown.Item onClick={() => ilmaisu("ihmin")}>ihminen</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="primary"
        title="tekijä"
      >
        <Dropdown.Item onClick={() => tekija("Terh")}>Terhi</Dropdown.Item>
        <Dropdown.Item onClick={() => tekija("Kim")}>Kimmo</Dropdown.Item>
        <Dropdown.Item onClick={() => tekija("Ain")}>Aino</Dropdown.Item>
        <Dropdown.Item onClick={() => tekija("Henr")}>Henri</Dropdown.Item>
        <Dropdown.Item onClick={() => tekija("jok muu")}>
          joku muu...
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="dark"
        title="kontaktityösk"
      >
        <Dropdown.Item onClick={() => kontakti("seur")}>seuraa</Dropdown.Item>
        <Dropdown.Item onClick={() => kontakti("seur-ist")}>
          seuraa-istu
        </Dropdown.Item>
        <Dropdown.Item onClick={() => kontakti("kk")}>
          katsekontakti
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        variant="secondary"
        title="arvio"
      >
        <Dropdown.Item onClick={() => arvio("huon")}>huono</Dropdown.Item>
        <Dropdown.Item onClick={() => arvio("koht")}>kohtalainen</Dropdown.Item>
        <Dropdown.Item onClick={() => arvio("ok")}>ok</Dropdown.Item>
        <Dropdown.Item onClick={() => arvio("hyv")}>hyvä</Dropdown.Item>
        <Dropdown.Item onClick={() => arvio("maht")}>mahtava</Dropdown.Item>
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
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>muuta</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={working.tyoskentelylopina}
            onChange={e =>
              postWorking(
                Object.assign([], working, {
                  tyoskentelylopina: e.target.value
                })
              )
            }
          />
        </Form.Group>
      </Form>
    </>
  );
}
