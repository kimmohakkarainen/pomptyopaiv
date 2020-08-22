import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, Form, Button } from "react-bootstrap";
import { postLogin } from "./actions";

function Login({ postLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /*
  function postLogin({ username, password }) {
    console.log("postLogin");
    console.log(username);
    console.log(password);
  }*/

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => postLogin({ username, password })}
        >
          Login
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

function mapStateToProps(state) {
  return {
    credentials: state.credentials
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLogin: (params) => dispatch(postLogin(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
