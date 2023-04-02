import { useRef } from "react";
import heads from "./heads.svg";
import tails from "./tails.svg";
import styles from "./Toss.module.css";

const tossLogic = (youChoice, tossResult) => {};

export default function Toss() {
  const coinRef = useRef(null);
  const headRef = useRef(null);
  const tailRef = useRef(null);

  const onClick = (event) => {
    headRef.current.disabled = true;
    tailRef.current.disabled = true;
    tailRef.current.style.cursor = "not-allowed";
    headRef.current.style.cursor = "not-allowed";
    if (Math.random() < 0.5) {
      coinRef.current.className = styles.heads;
      tossLogic(event.target.innerText, "head");
    } else {
      coinRef.current.className = styles.tails;
      tossLogic(event.target.innerText, "tail");
    }
  };

  return (
    <section id={styles.toss}>
      <div id={styles.coin} ref={coinRef}>
        <img src={heads} className={styles.sideA} />
        <img src={tails} className={styles.sideB} />
      </div>
      <h1>Toss</h1>
      <div className={styles.headOrTail}>
        <button
          style={{ "background-color": "#1B6AB8" }}
          className={`btn ${styles.btn}`}
          ref={headRef}
          onClick={onClick}
        >
          Head
        </button>
        <button
          style={{ "background-color": "#5764A3" }}
          className={`btn ${styles.btn}`}
          ref={tailRef}
          onClick={onClick}
        >
          Tail
        </button>
      </div>
    </section>
  );
}
