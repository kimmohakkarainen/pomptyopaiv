import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Jumbotron,
  Badge,
  Button,
  Nav,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Form,
  Container,
  Navbar,
  Accordion,
  Card,
  Table
} from "react-bootstrap";

export default function Yhteenveto() {
  return (
    <div>
      <Table striped bordered hover variant="light" className="taulu">
        <tbody>
          <tr>
            <td>Ulkoilukertoja</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Ulkoiluja yhteensä</td>
            <td>2h 30min</td>
          </tr>
          <tr>
            <td>Rauhoittumisia pihassa</td>
            <td>2kpl</td>
          </tr>
          <tr>
            <td>Juoruamista</td>
            <td>Jonkin verran</td>
          </tr>
          <tr>
            <td>Älytehtäviä</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Juoruamista</td>
            <td>Jonkin verran</td>
          </tr>
          <tr>
            <td>Älytehtäviä</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Juoruamista</td>
            <td>Jonkin verran</td>
          </tr>
          <tr>
            <td>Älytehtäviä</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Juoruamista</td>
            <td>Jonkin verran</td>
          </tr>
          <tr>
            <td>Älytehtäviä</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
