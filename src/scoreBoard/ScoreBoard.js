import styles from "./ScoreBoard.module.css";

export default function ScoreBoard() {
  return (
    <section className={styles.scoreBoard}>
      <div className={styles.you}>
        <p>you</p>
        <p>Runs: 190</p>
      </div>
      <div className={styles.target}>
        <p>target for {"computer"}</p>
        <p>not set </p>
      </div>
      <div className={styles.computer}>
        <p>Computer</p>
        <p>Runs: 0</p>
      </div>
    </section>
  );
}
