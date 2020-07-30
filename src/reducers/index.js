export default function pompState(
  state = {
    selectedDate: null,
    calendar: [],
    merkinnat: [],
    summary: []
  },
  action
) {
  return Object.assign([], state, action.payload);
}
