import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default function Paasivu() {
  return (
    <Jumbotron>
      <h1>Pääsivu</h1>
      <p>Kootut selitykset tähän</p>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Primary</Button>{" "}
      <Button variant="success">Primary</Button>{" "}
      <Button variant="warning">Primary</Button>{" "}
      <Button variant="danger">Primary</Button>{" "}
      <Button variant="info">info</Button>{" "}
    </Jumbotron>
  );
}
