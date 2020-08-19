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
  return Object.assign([], state, action.payload);
}
