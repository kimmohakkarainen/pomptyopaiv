export default function pompState(
  state = {
    calendar: [],
    merkinnat: [],
    summary: []
  },
  action
) {
  return Object.assign([], state, action.payload);
}
