import React from "react";
import { Jumbotron, Badge, Button } from "react-bootstrap";

export default function Uusinakyma() {
  return (
    <Jumbotron>
      <h1 variant="danger">Uusi nakyma</h1>
      <p>Kootut selitykset tähän</p>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Primary</Button>{" "}
      <Button variant="success">Primary</Button>{" "}
      <Button variant="warning">Primary</Button>{" "}
      <Button variant="danger">Primary</Button>{" "}
      <Badge variant="secondary">New</Badge>
      <Button variant="info">info</Button>{" "}
    </Jumbotron>
  );
}
