import React, { useState } from "react";
import { Jumbotron, Badge, Button, Table } from "react-bootstrap";

export default function Kalenteri() {
  const [sivu, setSivu] = useState(null);
  function onClick(event) {
    console.log(event.target.id);
    setSivu(event.target.id);
  }

  console.log(sivu);
  return (
    <>
      {sivu === null && (
        <Table bordered striped onClick={onClick}>
          <thead>
            <tr>
              <th>Ma</th>
              <th>Ti</th>
              <th>Ke</th>
              <th>To</th>
              <th>Pe</th>
              <th>La</th>
              <th>Su</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "#606060" }}>29</td>
              <td style={{ color: "#606060" }}>30</td>
              <td className="hyv" id={1}>
                1
              </td>
              <td className="hyv">2</td>
              <td className="hyv">3</td>
              <td className="hyv">4</td>
              <td className="hyv">5</td>
            </tr>
            <tr>
              <td className="hyv">6</td>
              <td className="hyv">7</td>
              <td className="hyv">8</td>
              <td className="hyv">9</td>
              <td className="hyv">10</td>
              <td className="hyv">11</td>
              <td className="hyv">12</td>
            </tr>
            <tr>
              <td className="hyv">13</td>
              <td className="hyv">14</td>
              <td className="hyv">15</td>
              <td className="hyv">16</td>
              <td className="hyv">17</td>
              <td className="hyv">18</td>
              <td className="hyv">19</td>
            </tr>
            <tr>
              <td className="hyv">20</td>
              <td className="hyv">21</td>
              <td className="hyv">22</td>
              <td className="hyv">23</td>
              <td className="hyv">24</td>
              <td className="hyv">25</td>
              <td className="hyv">26</td>
            </tr>
            <tr>
              <td className="hyv">27</td>
              <td className="hyv">28</td>
              <td className="hyv">29</td>
              <td className="hyv">30</td>
              <td className="hyv">31</td>
              <td style={{ color: "#606060" }}>1</td>
              <td style={{ color: "#606060" }}>2</td>
            </tr>
            <tr />
          </tbody>
        </Table>
      )}
      {sivu != null && <Paavalikko />}
    </>
  );
}

function Paavalikko() {
  return (
    <Jumbotron>
      <h1>Paavalikko</h1>
      <p>tähän päävälikko</p>
    </Jumbotron>
  );
}
