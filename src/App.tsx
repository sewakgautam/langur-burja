import bhote from "./assets/burja.png";
import jhandi from "./assets/jhanda.png";
import chidi from "./assets/Chidi.png";
import pana from "./assets/pana.png";
import hukum from "./assets/hukum.png";
import itta from "./assets/itta.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [finalState, setFinalState] = useState([0, 1, 2, 3, 4, 5]);
  const assets = [bhote, jhandi, chidi, pana, hukum, itta];

  const [css, setCss] = useState("logo");

  const datas = (a: number) => {
    const n = a;
    let final = [];
    for (let i = 0; i < n; i++) {
      const maindata = Math.floor(Math.random() * 6);
      final.push(maindata);
    }

    return final;
  };

  return (
    <>
      <div>
        <div className="image-grid">
          <img className={css} src={assets[finalState[0]]} />
          <img className={css} src={assets[finalState[1]]} />
          <img className={css} src={assets[finalState[2]]} />
          <img className={css} src={assets[finalState[3]]} />
          <img className={css} src={assets[finalState[4]]} />
          <img className={css} src={assets[finalState[5]]} />
        </div>

        <div className="buttons">
          <button
            className="card"
            onClick={() => {
              setCss("logo-spin");
              setTimeout(function () {
                setFinalState(datas(6));
                setCss("logo");
              }, 2000);
            }}
          >
            Roll
          </button>
          <button
            className="card"
            onClick={() => {
              setFinalState([0, 1, 2, 3, 4, 5]);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
