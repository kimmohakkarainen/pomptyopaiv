export default function pompState(
  state = {
    calendar: [],
    working: {
      alytehtava: 0
    }
  },
  action
) {
  console.log(action);
  return Object.assign([], state, action.payload);
}
