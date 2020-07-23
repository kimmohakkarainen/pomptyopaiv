export default function pompState(
  state = {
    calendar: [],
    working: {
      Katulenkki: 0,
      Metsalenkki: 0,
      OhituksetLenkilla: 0,
      Juoruaminen: [],
      LenkinArvio: [],
      Rauhoittuminen: 0,
      NamietsintaSisalla: 0,
      NamietsintaUlkona: 0,
      Erottelu: [],
      Ilmaisu: [],
      Tekija: [],
      Kontakti: [],
      Arvio: [],
      Alytehtava: 0,
      OhituksiaSosiaalistamisessa: 0,
      SosiaalistamisenKesto: 0,
      Sosiaalistettavat: [],
      SosiaalistamisenArvio: [],
      UlkoiluLopina: "",
      TyoskentelyLopina: "",
      SosiaalistamisLopina: ""
    },
    metsalenkit: [],
    katulenkit: []
  },
  action
) {
  return Object.assign([], state, action.payload);
}
