export default function pompState(
  state = {
    calendar: [],
    working: {
      Katulenkki: 0,
      Metsälenkki: 0,
      OhituksetLenkillä: 0,
      Juoruaminen: [],
      LenkinArvio: [],
      Rauhoittuminen: 0,
      NamietsintäSisällä: 0,
      NamietsintäUlkona: 0,
      Erottelu: [],
      Ilmaisu: [],
      Tekijä: [],
      Kontakti: [],
      Arvio: [],
      Älytehtävä: 0,
      OhituksiaSosiaalistamisessa: 0,
      SosiaalistamisenKesto: 0,
      Sosiaalistettavat: [],
      SosiaalistamisenArvio: [],
      UlkoiluLöpinä: "",
      TyöskentelyLöpinä: "",
      SosiaalistamisLöpinä: ""
    }
  },
  action
) {
  return Object.assign([], state, action.payload);
}
