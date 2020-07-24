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
import { fetchSummary } from "./actions";

function Yhteenveto({ fetchSummary, summary }) {
  useEffect(() => {
    fetchSummary();
  }, [fetchSummary]);
  console.log(summary);

  if (summary != null && summary.length > 3) {
    const ulkoilukerrat = summary[0][1];
  }
  return (
    <div>
      <Table striped bordered variant="light" className="taulu">
        {summary.length > 0 && (
          <tbody>
            <tr>
              <td>Ulkoilukertoja</td>
              <td>{summary[0][1]}</td>
            </tr>
            <tr>
              <td>Ulkoilujen kesto</td>
              <td>{summary[1][1]}</td>
            </tr>
            <tr>
              <td>Rauhoittumisia</td>
              <td>{summary[2][1]}</td>
            </tr>
            <tr>
              <td>Älytehtäviä</td>
              <td>{summary[3][1]}</td>
            </tr>
            <tr>
              <td>Juoruamista</td>
              <td>Jonkin verran</td>
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
        )}
      </Table>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    summary: state.summary
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSummary: params => dispatch(fetchSummary(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Yhteenveto);