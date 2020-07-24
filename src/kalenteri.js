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

function Kalenteri({ calendar, onSelect }) {
  function onClick(event) {
    console.log(event.target.id);
    onSelect(event.target.id);
  }

  console.log(calendar);

  return (
    <>
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
          {calendar.map(rivi => {
            return (
              <tr key={rivi.week}>
                {rivi.days.map(sarake => {
                  if (sarake.today) {
                    return (
                      <td id={sarake.text} key={sarake.text} className="today">
                        <div
                          id={sarake.text}
                          key={sarake.text}
                          className="today"
                        >
                          {" "}
                          {sarake.value}
                        </div>
                      </td>
                    );
                  } else if (sarake.text) {
                    return (
                      <OverlayTrigger
                        key={sarake.text}
                        placement="top"
                        overlay={
                          <Tooltip id={sarake.text}>{sarake.text}</Tooltip>
                        }
                      >
                        <td id={sarake.text} key={sarake.text}>
                          {" "}
                          {sarake.value}
                        </td>
                      </OverlayTrigger>
                    );
                  } else if (sarake.empty) {
                    return (
                      <td id={sarake.text} key={sarake.text} className="tyhja">
                        {" "}
                        {sarake.value}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        id={sarake.text}
                        key={sarake.text}
                        className="kal"
                        key={sarake.value}
                      >
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
    </>
  );
}

function mapStateToProps(state) {
  return {
    calendar: state.calendar
  };

  /*
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
  };
  */
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
