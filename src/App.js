import { useState } from "react";
import "./App.css";
import Toss from "./toss/Toss";
import BatOrBowl from "./BatOrBowl/BatOrBowl";
import GameLogic from "./GameLogic/GameLogic";
import ComputerToss from "./ComputerToss/ComputerToss";

function App() {
  const [tossWin, setTossWin] = useState(null);
  const [batter, setBatter] = useState("");

  return (
    <>
      {tossWin === null && batter === "" && <Toss setToss={setTossWin}></Toss>}
      {tossWin === true && batter === "" && (
        <BatOrBowl setBatter={setBatter}></BatOrBowl>
      )}
      {tossWin === false && batter === "" && (
        <ComputerToss
          setBatter={setBatter}
          setTossWin={setTossWin}
        ></ComputerToss>
      )}
      {batter !== "" && (
        <GameLogic
          batter={batter}
          setBatter={setBatter}
          setTossWin={setTossWin}
        />
      )}
    </>
  );
}

export default App;
