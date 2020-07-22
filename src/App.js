import React from "react";
import "./styles.css";

import Paasivu from "./paasivu.js";
import Kalenteri from "./kalenteri.js";
import Uusinakyma from "./uusinakyma.js";
import Paavalikko from "./paavalikko.js";

export default function App() {
  return (
    <div className="App">
      <Paavalikko />
    </div>
  );
}
