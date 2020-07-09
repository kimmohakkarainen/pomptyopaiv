import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Jumbotron,
  Badge,
  Button,
  Table,
  Tooltip,
  Overlay,
  OverlayTrigger
} from "react-bootstrap";
import Paavalikko from "./paavalikko.js";

function Kalenteri({ calendar }) {
  const [sivu, setSivu] = useState(null);
  function onClick(event) {
    console.log(event.target.id);
    setSivu(event.target.id);
  }

  console.log(calendar);
  console.log(sivu);
  return (
    <>
      {sivu === null && (
        <Table bordered striped>
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
            {calendar.map(rivi => {
              return (
                <tr>
                  {rivi.map(sarake => {
                    if (sarake.today) {
                      return (
                        <td className="today">
                          <div className="today"> {sarake.value}</div>
                        </td>
                      );
                    } else if (sarake.text) {
                      return (
                        <OverlayTrigger
                          key={2}
                          placement="top"
                          overlay={<Tooltip id={2}>{sarake.text}</Tooltip>}
                        >
                          <td> {sarake.value}</td>
                        </OverlayTrigger>
                      );
                    } else if (sarake.empty) {
                      return <td className="tyhja"> {sarake.value}</td>;
                    } else {
                      return (
                        <td className="kal" key={sarake}>
                          {sarake.value}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      {sivu != null && <Paavalikko />}
    </>
  );
}

function mapStateToProps(state) {
  return {
    calendar: [
      [
        { value: 29, empty: true, text: "höpö" },
        { value: 30, empty: true, text: "höpö" },
        { value: 1, empty: true, text: "höpö" },
        { value: 2, empty: true },
        { value: 3, empty: true, text: "höpö" },
        { value: 4, empty: true, text: "höpö" },
        { value: 5, empty: true, text: "höpö" }
      ],
      [
        { value: 6, empty: true, text: "höpö" },
        { value: 7, empty: true, text: "höpö" },
        { value: 8, empty: true, text: "höpö" },
        { value: 9, today: true, empty: true, text: "höpö" },
        { value: 10, empty: true, text: "höpö" },
        { value: 11, empty: true, text: "höpö" },
        { value: 12, empty: true, text: "höpö" }
      ],
      [
        { value: 13, empty: true, text: "höpö" },
        { value: 14, empty: true, text: "höpö" },
        { value: 15, empty: true, text: "höpö" },
        { value: 16, empty: true, text: "höpö" },
        { value: 17, empty: true, text: "höpö" },
        { value: 18, empty: true, text: "höpö" },
        { value: 19, empty: true, text: "höpö" }
      ],
      [
        { value: 20, empty: true, text: "höpö" },
        { value: 21, empty: true, text: "höpö" },
        { value: 22, empty: true, text: "höpö" },
        { value: 23, empty: true, text: "höpö" },
        { value: 24, empty: true, text: "höpö" },
        { value: 25, empty: true, text: "höpö" },
        { value: 26, empty: true, text: "höpö" }
      ],
      [
        { value: 27, empty: true, text: "höpö" },
        { value: 28, empty: true, text: "höpö" },
        { value: 29, empty: true, text: "höpö" },
        { value: 30, empty: true, text: "höpö" },
        { value: 31, empty: true, text: "höpö" },
        { value: 1, empty: true, text: "höpö" },
        { value: 2, empty: true, text: "höpö" }
      ]
    ],
    calendarold: [
      [0, 0, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24, 25, 26],
      [27, 28, 29, 30, 31, 0, 0]
    ]
  };
}

const mapDispatchToProps = dispatch => {
  return {
    /*
    fetchQueue: () => dispatch(fetchQueue()),
    postQueue: params => dispatch(postQueue(params))
    */
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kalenteri);
