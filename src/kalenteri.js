import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

function Kalenteri({ calendar, onSelect }) {
  function onClick(event) {
    onSelect(event.target.id);
  }

  return (
    <>
      <Table bordered striped onClick={onClick} className="kalentr">
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
          {calendar.map((rivi) => {
            return (
              <tr key={rivi.week}>
                {rivi.days.map((sarake) => {
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
                      <td id={sarake.text} key={sarake.text}>
                        {" "}
                        {sarake.value}
                      </td>
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
                      <td id={sarake.text} key={sarake.text} className="kal">
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    /*
    fetchQueue: () => dispatch(fetchQueue()),
    postQueue: params => dispatch(postQueue(params))
    */
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Kalenteri);
