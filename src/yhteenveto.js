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

  return (
    <div className="yhtvet">
      <Table striped bordered variant="light" className="taulu">
        {summary.length > 0 && (
          <tbody>
            <tr>
              <td>Katulenkkejä</td>
              <td>{summary[0][1]}</td>
            </tr>
            <tr>
              <td>Katulenkkien kesto</td>
              <td>{summary[1][1]}min</td>
            </tr>

            <tr>
              <td>Metsälenkkejä</td>
              <td>{summary[2][1]}</td>
            </tr>
            <tr>
              <td>Metsälenkkien kesto</td>
              <td>{summary[3][1]}min</td>
            </tr>

            <tr>
              <td>Älytehtäviä</td>
              <td>{summary[4][1]}</td>
            </tr>
            <tr>
              <td>Erottelut</td>
              <td>{summary[5][1]}</td>
            </tr>
            <tr>
              <td>Ilmaisut</td>
              <td>{summary[6][1]}</td>
            </tr>
            <tr>
              <td>Kontaktityöskentelyt</td>
              <td>{summary[7][1]}</td>
            </tr>
            <tr>
              <td>Namietsintä</td>
              <td>{summary[8][1]}</td>
            </tr>
            <tr>
              <td>Sosiaalistaminen</td>
              <td>{summary[9][1]}</td>
            </tr>
            <tr>
              <td>Sosiaalistamisen kesto</td>
              <td>{summary[10][1]}</td>
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
