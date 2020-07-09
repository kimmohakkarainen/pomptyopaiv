export default function pompState(
  state = {
    calendar: [],
    working: {
      katulenkki: 0,
      metsalenkki: 0,
      ohitukset_lenkilla: 0,
      rauhoittuminen: 0,
      namietsinta_sisalla: 0,
      namietsinta_ulkona: 0,
      alytehtava: 0,
      ohituksia_sosiaalistamisessa: 0,
      sosiaalistaminen_kesto: 0
    }
  },
  action
) {
  console.log(action);
  return Object.assign([], state, action.payload);
}
