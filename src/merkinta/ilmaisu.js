import React, { useState } from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { postMerkinta } from "../actions";

function Ilmaisu({ merkinta, postMerkinta }) {
  const [lopina, setLopina] = useState(merkinta.IlmaisuLopina);

  function ilmaisu(e) {
    const newvalue = Object.assign({}, merkinta, {
      Ilmaisu: e.target.value
    });
    postMerkinta(newvalue);
  }
  function Arvio(e) {
    const newvalue = Object.assign({}, merkinta, {
      Arvio: e.target.value
    });
    postMerkinta(newvalue);
  }

  function onLopinaFocusOut() {
    const newvalue = Object.assign({}, merkinta, {
      IlmaisuLopina: lopina
    });
    console.log("onLopinaFocusOut");
    console.log(newvalue);
    postMerkinta(newvalue);
  }

  function IlmaisuLopina(e) {
    const newvalue = Object.assign({}, merkinta, {
      IlmaisuLopina: e.target.value
    });
    postMerkinta(newvalue);
  }
  console.log(merkinta);
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>ilmaisu</Form.Label>
          <Form.Control as="select" value={merkinta.Ilmaisu} onChange={ilmaisu}>
            <option default hidden>
              -
            </option>
            <option>laatikko</option>
            <option>ovi</option>
            <option>ihminen</option>
          </Form.Control>
        </Form.Group>
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
            value={lopina}
            onChange={(e) => setLopina(e.target.value)}
            onBlur={onLopinaFocusOut}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    merkinnat: state.merkinnat
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    postMerkinta: (params) => dispatch(postMerkinta(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ilmaisu);
