export default function pompState(
  state = {
    calendar: [],
    working: {
      katulenkki: 0,
      metsalenkki: 0,
      ohitukset_lenkilla: 0,
      juoruaminen: [],
      lenkinarvio: [],
      rauhoittuminen: 0,
      namietsinta_sisalla: 0,
      namietsinta_ulkona: 0,
      erottelu: [],
      ilmaisu: [],
      tekija: [],
      kontakti: [],
      arvio: [],
      alytehtava: 0,
      ohituksia_sosiaalistamisessa: 0,
      sosiaalistaminen_kesto: 0,
      sosiaalistettavat: [],
      sosiaalistamisenarvio: [],
      ulkoilulopina: "",
      tyoskentelylopina: "",
      sosiaalistamislopina: ""
    }
  },
  action
) {
  return Object.assign([], state, action.payload);
}
