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
  window.localStorage.setItem("pomptyop-access", data.access_token);
  window.localStorage.setItem("pomptyop-refresh", data.refresh_token);
  return {
    type: "LOGIN_SUCCEEDED",
    payload: {
      credentials: data
    }
  };
}

export function postLogout() {
  return (dispatch) => {
    window.localStorage.removeItem("pomptyop-access");
    window.localStorage.removeItem("pomptyop-refresh");
    dispatch(logoutSucceeded());
  };
}

export function logoutSucceeded() {
  window.localStorage.removeItem("pomptyop-access");
  window.localStorage.removeItem("pomptyop-refresh");
  return {
    type: "CONNECTION_ERROR",
    payload: {
      error: null,
      credentials: null,
      username: "",
      dogname: ""
    }
  };
}

export function fetchMerkinnat(date) {
  return (dispatch) => {
    const access_token = window.localStorage.getItem("pomptyop-access");
    api
      .getRecords(access_token, date)
      .then((resp) => {
        dispatch(fetchMerkinnatSucceeded(resp.data));
      })
      .catch((error) => {
        const refresh_token = window.localStorage.getItem("pomptyop-refresh");
        api
          .postRefresh(refresh_token)
          .then((resp) => {
            window.localStorage.setItem(
              "pomptyop-access",
              resp.data.access_token
            );
            window.localStorage.setItem(
              "pomptyop-refresh",
              resp.data.refresh_token
            );
            const access_token = resp.data.access_token;
            api
              .getRecords(access_token, date)
              .then((resp) => {
                dispatch(fetchMerkinnatSucceeded(resp.data));
              })
              .catch((error) => {
                dispatch(connectionError(error));
              });
          })
          .catch((error) => {
            dispatch(logoutSucceeded());
          });
      });
  };
}

export function postMerkinta(params) {
  return (dispatch) => {
    const access_token = window.localStorage.getItem("pomptyop-access");
    api
      .postRecord(access_token, params)
      .then((resp) => {
        console.log(resp.data);
        dispatch(fetchMerkinnatSucceeded(resp.data));
      })
      .catch((error) => {
        const refresh_token = window.localStorage.getItem("pomptyop-refresh");
        api
          .postRefresh(refresh_token)
          .then((resp) => {
            window.localStorage.setItem(
              "pomptyop-access",
              resp.data.access_token
            );
            window.localStorage.setItem(
              "pomptyop-refresh",
              resp.data.refresh_token
            );
            const access_token = resp.data.access_token;
            api
              .postRecord(access_token, params)
              .then((resp) => {
                dispatch(fetchMerkinnatSucceeded(resp.data));
              })
              .catch((error) => {
                dispatch(connectionError(error));
              });
          })
          .catch((error) => {
            dispatch(logoutSucceeded());
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
    const access_token = window.localStorage.getItem("pomptyop-access");

    api
      .getSummary(access_token, date)
      .then((resp) => {
        dispatch(fetchSummarySucceeded(resp.data));
      })
      .catch((error) => {
        const refresh_token = window.localStorage.getItem("pomptyop-refresh");
        api
          .postRefresh(refresh_token)
          .then((resp) => {
            window.localStorage.setItem(
              "pomptyop-access",
              resp.data.access_token
            );
            window.localStorage.setItem(
              "pomptyop-refresh",
              resp.data.refresh_token
            );
            const access_token = resp.data.access_token;
            api
              .getSummary(access_token, date)
              .then((resp) => {
                dispatch(fetchSummarySucceeded(resp.data));
              })
              .catch((error) => {
                dispatch(connectionError(error));
              });
          })
          .catch((error) => {
            dispatch(logoutSucceeded());
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
    const access_token = window.localStorage.getItem("pomptyop-access");

    api
      .getCalendar(access_token)
      .then((resp) => {
        dispatch(fetchCalendarSucceeded(resp.data));
      })
      .catch((error) => {
        const refresh_token = window.localStorage.getItem("pomptyop-refresh");
        api
          .postRefresh(refresh_token)
          .then((resp) => {
            window.localStorage.setItem(
              "pomptyop-access",
              resp.data.access_token
            );
            window.localStorage.setItem(
              "pomptyop-refresh",
              resp.data.refresh_token
            );
            const access_token = resp.data.access_token;
            api
              .getCalendar(access_token)
              .then((resp) => {
                dispatch(fetchCalendarSucceeded(resp.data));
              })
              .catch((error) => {
                dispatch(connectionError(error));
              });
          })
          .catch((error) => {
            dispatch(logoutSucceeded());
          });
      });
  };
}

export function fetchCalendarSucceeded(data) {
  return {
    type: "FETCH_CALENDAR_SUCCEEDED",
    payload: {
      calendar: data.weeks,
      username: data.username,
      dogname: data.dogname
    }
  };
}

/*
export function fetchCalendarSucceeded(data) {
  return {
    type: "FETCH_CALENDAR_SUCCEEDED",
    payload: {
      calendar: data
    }
  };
}
*/
