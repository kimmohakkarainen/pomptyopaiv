export default function pompState(
  state = {
    credentials: null,
    selectedDate: null,
    calendar: [],
    merkinnat: [],
    summary: []
  },
  action
) {
  console.log(action);
  if (action.payload == null) {
    const refresh_token = window.localStorage.getItem("pomptyop-refresh");
    const credentials =
      refresh_token === null
        ? null
        : {
            refresh_token: refresh_token,
            access_token: ""
          };
    console.log(credentials);
    const s2 = Object.assign([], state, { credentials }, action.payload);
    console.log(action.type);
    console.log(s2);
    return s2;
  } else {
    return Object.assign([], state, action.payload);
  }
}
