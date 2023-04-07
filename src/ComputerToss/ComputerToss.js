export default function ComputerToss({ setBatter, setTossWin }) {
  let computerTossChoice;

  const computerToss = () => {
    if (Math.random() < 0.5) computerTossChoice = "bat";
    else computerTossChoice = "bowl";
    return computerTossChoice;
  };
  const continueHandler = () => {
    setTossWin(1);
    if (computerTossChoice === "bat") setBatter("computer");
    else setBatter("user");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#8A5E84" }}>
        computer won the toss and choose to {computerToss()}
      </h1>
      <button
        onClick={continueHandler}
        style={{ backgroundColor: "#5764A3" }}
        className="btn"
      >
        Continue
      </button>
    </div>
  );
}
