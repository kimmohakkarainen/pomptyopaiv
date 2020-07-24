import * as api from "../api";

export function connectionError(error) {
  return {
    type: "CONNECTION_ERROR",
    payload: {
      error: error
    }
  };
}

export function fetchMerkinnat(date) {
  return dispatch => {
    api
      .getRecords()
      .then(resp => {
        dispatch(fetchMerkinnatSucceeded(resp.data));
      })
      .catch(error => {
        dispatch(connectionError(error));
      });
  };
}

export function postMerkinta(params) {
  return dispatch => {
    api
      .postRecord(params)
      .then(resp => {
        console.log(resp.data);
        dispatch(fetchMerkinnatSucceeded(resp.data));
      })
      .catch(error => {
        dispatch(connectionError(error));
      });
  };
}

export function fetchMerkinnatSucceeded(data) {
  return {
    type: "FETCH_MERKINNAT_SUCCEEDED",
    payload: {
      merkinnat: data
    }
  };
}

/*
Summary
*/

export function fetchSummary(date) {
  return dispatch => {
    api
      .getSummary()
      .then(resp => {
        dispatch(fetchSummarySucceeded(resp.data));
      })
      .catch(error => {
        dispatch(connectionError(error));
      });
  };
}

export function fetchSummarySucceeded(data) {
  return {
    type: "FETCH_SUMMARY_SUCCEEDED",
    payload: {
      summary: data
    }
  };
}
