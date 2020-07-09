export default function pompState(
  state = {
    calendar: []
  },
  action
) {
  console.log(action);
  return Object.assign([], state, action.payload);
}
