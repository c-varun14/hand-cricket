import ScoreBoard from "./ScoreBoard/ScoreBoard";
import one from "./1.ico";
import "./GameLogic.css";

export default function GameLogic() {
  return (
    <div className="flex" style={{ flexDirection: "column" }}>
      <ScoreBoard />
      <div id="result">
        <h1>Result</h1>
        <p>
          {} runs scored by {}
        </p>
      </div>
      <div id="choices">
        <div>
          <h1>You</h1>
          <img src={one} />
        </div>
        <div></div>
      </div>
      <div id="controls-1"></div>
      <div id="controls-2"></div>
    </div>
  );
}
