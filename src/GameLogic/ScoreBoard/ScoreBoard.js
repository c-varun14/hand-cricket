import styles from "./ScoreBoard.module.css";

export default function ScoreBoard({ batter, target, computerRuns, userRuns }) {
  // console.log(target, computerRuns, userRuns);
  target = !target ? "Not Set" : target;
  return (
    <section className={styles.scoreBoard}>
      <div className={`${styles.you} flex`}>
        <p>you</p>
        <p>Runs: {userRuns}</p>
      </div>
      <div className={`${styles.target} flex`}>
        <p>Runs to {batter === "computer" ? "Chase" : "Defend"}</p>
        <p>{target} </p>
      </div>
      <div className={`${styles.computer} flex`}>
        <p>Computer</p>
        <p>Runs: {computerRuns}</p>
      </div>
    </section>
  );
}
