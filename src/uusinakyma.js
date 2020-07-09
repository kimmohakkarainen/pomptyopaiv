import React from "react";
import { Jumbotron, Badge, Button } from "react-bootstrap";

export default function Uusinakyma() {
  return (
    <Jumbotron>
      <h1 variant="danger">Uusi nakyma</h1>
      <p>Kootut selitykset tähän</p>
      <Button variant="primary">kalenteri</Button>{" "}
      <Button variant="secondary">lenkit</Button>{" "}
      <Button variant="success">hypokoira</Button>{" "}
      <Button variant="warning">sosiaalistaminen</Button>{" "}
      <Button variant="danger">työskentely</Button>{" "}
      <Button variant="info">muuta</Button>{" "}
    </Jumbotron>
  );
}
