import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Nav,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Accordion,
  Card,
  Form
} from "react-bootstrap";
import { postMerkinta } from "../actions";

function Erottelu({ merkinta, postMerkinta }) {
  function paikka(e) {
    const newvalue = Object.assign({}, merkinta, {
      Paikka: e.target.value
    });
    postMerkinta(newvalue);
  }
  function Arvio(e) {
    const newvalue = Object.assign({}, merkinta, {
      Arvio: e.target.value
    });
    postMerkinta(newvalue);
  }
  function Hypot(e) {
    const newvalue = Object.assign({}, merkinta, {
      Hypot: e.target.value
    });
    postMerkinta(newvalue);
  }
  function Tekija(e) {
    const newvalue = Object.assign({}, merkinta, {
      Tekija: e.target.value
    });
    postMerkinta(newvalue);
  }
  function ErotteluLopina(e) {
    const newvalue = Object.assign({}, merkinta, {
      ErotteluLopina: e.target.value
    });
    postMerkinta(newvalue);
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>paikka</Form.Label>
          <Form.Control as="select" value={merkinta.Paikka} onChange={paikka}>
            <option default hidden>
              -
            </option>
            <option>keittiö</option>
            <option>olohuone</option>
            <option>makuuhuone</option>
            <option>eteinen</option>
            <option>parveke</option>
            <option>etupiha</option>
            <option>ala-aula</option>
            <option>Ainon huone</option>
            <option>telkkarihuone</option>
            <option>kylpyhuone</option>
            <option>terassi</option>
            <option>takapiha</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>tekijä</Form.Label>
          <Form.Control as="select" value={merkinta.Tekija} onChange={Tekija}>
            <option default hidden>
              -
            </option>
            <option>Terhi</option>
            <option>Aino</option>
            <option>Kimmo</option>
            <option>Henri</option>
            <option>joku muu</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>hypohaju</Form.Label>
          <Form.Control as="select" value={merkinta.Hypot} onChange={Hypot}>
            <option default hidden>
              -
            </option>
            <option>h1</option>
            <option>h2</option>
            <option>h3</option>
            <option>h4</option>><option>h5</option>
            <option>h6</option>
            <option>h7</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>toinen haju</Form.Label>
          <Form.Control as="select" value={merkinta.Hypot} onChange={Hypot}>
            <option default hidden>
              -
            </option>
            <option>n1</option>
            <option>n2</option>
            <option>n3</option>
            <option>n4</option>
            <option>n5</option>
            <option>n6</option>
            <option>n7</option>
            <option>T</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>kolmas haju</Form.Label>
          <Form.Control as="select" value={merkinta.Hypot} onChange={Hypot}>
            <option default hidden>
              -
            </option>
            <option>n1</option>
            <option>n2</option>
            <option>n3</option>
            <option>n4</option>
            <option>n5</option>
            <option>n6</option>
            <option>n7</option>
            <option>T</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>neljäs haju</Form.Label>
          <Form.Control as="select" value={merkinta.Hypot} onChange={Hypot}>
            <option default hidden>
              -
            </option>
            <option>n1</option>
            <option>n2</option>
            <option>n3</option>
            <option>n4</option>
            <option>n5</option>
            <option>n6</option>
            <option>n7</option>
            <option>T</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>arvio</Form.Label>
          <Form.Control as="select" value={merkinta.Arvio} onChange={Arvio}>
            <option default hidden>
              -
            </option>
            <option>huono</option>
            <option>kohtalainen</option>
            <option>ok</option>
            <option>hyvä</option>
            <option>mahtava</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>muuta</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={merkinta.ErotteluLopina}
            onChange={ErotteluLopina}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    katulenkit: state.katulenkit
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
)(Erottelu);
