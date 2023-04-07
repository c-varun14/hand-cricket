import { useEffect, useRef, useState } from "react";

import ScoreBoard from "./ScoreBoard/ScoreBoard";
import "./GameLogic.css";

import img1 from "./choicesImages/1.png";
import img2 from "./choicesImages/2.png";
import img3 from "./choicesImages/3.png";
import img4 from "./choicesImages/4.png";
import img5 from "./choicesImages/5.png";
import img6 from "./choicesImages/6.png";

const controls = [
  { src: img1, id: 1, className: "control-btn" },
  { src: img2, id: 2, className: "control-btn" },
  { src: img3, id: 3, className: "control-btn" },
  { src: img4, id: 4, className: "control-btn" },
  { src: img5, id: 5, className: "control-btn" },
  { src: img6, id: 6, className: "control-btn" },
];

let target;
const computerWinText = "Computer won the game. Better luck next time";
const userWinText = "Congrats, you won the match 🎉🎉";

export default function GameLogic({ batter, setBatter, setTossWin }) {
  const [gameOver, setgameOver] = useState(false);
  const [userRuns, setUserRuns] = useState(0);
  const [computerRuns, setComputerRuns] = useState(0);
  const resultText = useRef();
  const choiceComputerRef = useRef();
  const choiceUserRef = useRef();

  const winnerText = () => {
    if (computerRuns === userRuns) return "It's a draw";
    else if (batter === "computer") {
      if (computerRuns >= target) return computerWinText;
      else return userWinText;
    } else {
      if (userRuns >= target) return userWinText;
      else return computerWinText;
    }
  };

  const gameOverHandler = () => {
    target = null;
    setComputerRuns(0);
    setUserRuns(0);
    setBatter("");
    setTossWin(null);
    setgameOver(false);
  };
  const sameChoicesMade = () => {
    resultText.current.innerText = "OUT";

    if (target) {
      setgameOver(true);
    } else if (batter === "user") {
      setBatter("computer");
    } else {
      setBatter("user");
    }
    target = !target ? (target = computerRuns + userRuns + 1) : target;
  };

  const differentChoiceMade = () => {
    if (target) {
      if (
        (batter === "user" && userRuns >= target) ||
        (batter === "computer" && computerRuns >= target)
      )
        setgameOver(true);
    }
  };

  useEffect(() => {
    const computerChoice = 1;
    const userChoice = 2;
    if (computerChoice && userChoice) {
      resultText.current.innerText = `${
        batter === "user" ? "You" : "Computer"
      } scored ${batter === "user" ? userChoice : computerChoice} runs`;
      differentChoiceMade();
    }
  }, [computerRuns, userRuns]);

  const choiceHandler = (event) => {
    event.preventDefault();
    const userChoice = +event.target.id;
    const computerChoice = Math.ceil(Math.random() * 6);
    choiceComputerRef.current.id = computerChoice;
    choiceComputerRef.current.src = controls[computerChoice - 1].src;
    choiceUserRef.current.id = userChoice;
    choiceUserRef.current.src = controls[userChoice - 1].src;
    if (computerChoice !== userChoice) {
      if (batter === "user") setUserRuns((prevRuns) => prevRuns + userChoice);
      else setComputerRuns((prevRuns) => prevRuns + computerChoice);
    } else sameChoicesMade();
  };
  return (
    <div className="flex" id="game-logic">
      <ScoreBoard
        userRuns={userRuns}
        computerRuns={computerRuns}
        target={target}
        batter={batter}
      />
      <div id="result" className="flex">
        <h1>Result</h1>
        <p ref={resultText}></p>
      </div>
      <div id="choices" className="flex">
        <div className="flex">
          <h3>You{batter === "user" ? "(Batting)" : "(Bowling)"}</h3>
          <img ref={choiceUserRef} className="control-btn" />
        </div>
        <div className="flex">
          <h3>Computer{batter === "computer" ? "(Batting)" : "(Bowling)"}</h3>
          <img ref={choiceComputerRef} className="control-btn" />
        </div>
      </div>

      {!gameOver && (
        <div id="controls" className="flex" style={{ flexDirection: "column" }}>
          <div id="controls-1" className="flex">
            {controls.slice(0, 3).map((controlProperties) => (
              <img onClick={choiceHandler} {...controlProperties} />
            ))}
          </div>
          <div id="controls-2" className="flex">
            {controls.slice(3, 6).map((controlProperties) => (
              <img onClick={choiceHandler} {...controlProperties} />
            ))}
          </div>
        </div>
      )}

      {gameOver && (
        <div
          className="flex"
          style={{
            textAlign: "center",
            width: "95%",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "#5665A3" }}>{winnerText()}</h1>
          <button
            className="btn"
            style={{ backgroundColor: "#1B6AB8" }}
            onClick={gameOverHandler}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
