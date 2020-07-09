export function postWorking(params) {
  return dispatch => {
    dispatch(postWorkingSucceeded(params));
  };
}

export function postWorkingSucceeded(data) {
  return {
    type: "FETCH_WORKING_SUCCEEDED",
    payload: {
      working: data
    }
  };
}

export function connectionError(error) {
  return {
    type: "CONNECTION_ERROR",
    payload: {
      error: error
    }
  };
}
