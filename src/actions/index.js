import * as api from "../api";

export function connectionError(error) {
  return {
    type: "CONNECTION_ERROR",
    payload: {
      error: error,
      credentials: null
    }
  };
}

const credentials = {
  access_token: null,
  refresh_token: null
};

export function postLogin({ username, password }) {
  return (dispatch) => {
    api
      .postLogin(username, password)
      .then((resp) => {
        dispatch(loginSucceeded(resp.data));
      })
      .catch((error) => {
        dispatch(connectionError(error));
      });
  };
}

export function loginSucceeded(data) {
  credentials.access_token = data.access_token;
  credentials.refresh_token = data.refresh_token;
  return {
    type: "LOGIN_SUCCEEDED",
    payload: {
      credentials: data
    }
  };
}

export function fetchMerkinnat(date) {
  return (dispatch) => {
    api
      .getRecords(credentials.access_token, date)
      .then((resp) => {
        dispatch(fetchMerkinnatSucceeded(resp.data));
      })
      .catch((error) => {
        api
          .postRefresh(credentials.refresh_token)
          .then((resp) => {
            credentials.access_token = resp.data.access_token;
            credentials.refresh_token = resp.data.refresh_token;
            api
              .getRecords(credentials.access_token, date)
              .then((resp) => {
                dispatch(fetchMerkinnatSucceeded(resp.data));
              })
              .catch((error) => {
                dispatch(connectionError(error));
              });
          })
          .catch((error) => {
            dispatch(connectionError(error));
          });
      });
  };
}

export function postMerkinta(params) {
  return (dispatch) => {
    api
      .postRecord(credentials.access_token, params)
      .then((resp) => {
        console.log(resp.data);
        dispatch(fetchMerkinnatSucceeded(resp.data));
      })
      .catch((error) => {
        api
          .postRefresh(credentials.refresh_token)
          .then((resp) => {
            credentials.access_token = resp.data.access_token;
            credentials.refresh_token = resp.data.refresh_token;
            api
              .postRecord(credentials.access_token, params)
              .then((resp) => {
                dispatch(fetchMerkinnatSucceeded(resp.data));
              })
              .catch((error) => {
                dispatch(connectionError(error));
              });
          })
          .catch((error) => {
            dispatch(connectionError(error));
          });
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
  return (dispatch) => {
    api
      .getSummary(credentials.access_token, date)
      .then((resp) => {
        dispatch(fetchSummarySucceeded(resp.data));
      })
      .catch((error) => {
        api
          .postRefresh(credentials.refresh_token)
          .then((resp) => {
            credentials.access_token = resp.data.access_token;
            credentials.refresh_token = resp.data.refresh_token;
            api
              .getSummary(credentials.access_token, date)
              .then((resp) => {
                dispatch(fetchSummarySucceeded(resp.data));
              })
              .catch((error) => {
                dispatch(connectionError(error));
              });
          })
          .catch((error) => {
            dispatch(connectionError(error));
          });
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

/* 
Calendar
*/

export function fetchCalendar() {
  return (dispatch) => {
    api
      .getCalendar(credentials.access_token)
      .then((resp) => {
        dispatch(fetchCalendarSucceeded(resp.data));
      })
      .catch((error) => {
        api
          .postRefresh(credentials.refresh_token)
          .then((resp) => {
            credentials.access_token = resp.data.access_token;
            credentials.refresh_token = resp.data.refresh_token;
            api
              .getCalendar(credentials.access_token)
              .then((resp) => {
                dispatch(fetchCalendarSucceeded(resp.data));
              })
              .catch((error) => {
                dispatch(connectionError(error));
              });
          })
          .catch((error) => {
            dispatch(connectionError(error));
          });
      });
  };
}

export function fetchCalendarSucceeded(data) {
  return {
    type: "FETCH_CALENDAR_SUCCEEDED",
    payload: {
      calendar: data
    }
  };
}
