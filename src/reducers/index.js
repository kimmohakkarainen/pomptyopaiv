export default function pompState(
  state = {
    calendar: [],
    metsalenkit: [],
    katulenkit: [],
    merkinnat: [],
    summary: []
  },
  action
) {
  return Object.assign([], state, action.payload);
}
