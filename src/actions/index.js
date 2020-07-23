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

export function addKatulenkki(params) {
  return dispatch => {
    const newid = params.length + 1;
    const newEntry = [
      {
        id: newid,
        kesto: 0,
        Juoruaminen: "",
        OhituksetLenkilla: 0,
        Rauhoittuminen: 0,
        UlkoiluLopina: "",
        Arvio: ""
      }
    ];
    dispatch(postKatulenkkiSucceeded(params.concat(newEntry)));
  };
}

export function postKatulenkki(params) {
  return dispatch => {
    dispatch(postKatulenkkiSucceeded([params]));
  };
}

export function postKatulenkkiSucceeded(data) {
  return {
    type: "FETCH_KATULENKIT_SUCCEEDED",
    payload: {
      katulenkit: data
    }
  };
}

export function addMetsalenkki(params) {
  console.log(params);
  return dispatch => {
    const newid = params.length + 1;
    const newEntry = [
      {
        id: newid,
        kesto: 0,
        Juoruaminen: "",
        OhituksetLenkilla: 0,
        Rauhoittuminen: 0,
        UlkoiluLopina: "",
        Arvio: ""
      }
    ];
    dispatch(postMetsalenkkiSucceeded(params.concat(newEntry)));
  };
}

export function postMetsalenkkiSucceeded(data) {
  return {
    type: "FETCH_METSALENKIT_SUCCEEDED",
    payload: {
      metsalenkit: data
    }
  };
}
