export default function pompState(
  state = {
    calendar: [],
    working: {
      alytehtava: 0,
      namietsinta_sisalla: 0,
      namietsinta_ulkona: 0,
      hopololo: 0
    }
  },
  action
) {
  console.log(action);
  return Object.assign([], state, action.payload);
}
