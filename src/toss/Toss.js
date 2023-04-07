import { useRef } from "react";
import heads from "./heads.svg";
import tails from "./tails.svg";
import styles from "./Toss.module.css";

export default function Toss({ setToss }) {
  const tossLogic = (youChoice, computerChoice) => {
    setTimeout(() => {
      if (youChoice == computerChoice) setToss(true);
      else setToss(false);
    }, 3000);
  };
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
      tossLogic(event.target.innerText, "Tail");
    } else {
      coinRef.current.className = styles.tails;
      tossLogic(event.target.innerText, "Head");
    }
  };

  return (
    <section id={styles.toss} className="flex">
      <div id={styles.coin} ref={coinRef}>
        <img src={heads} className={styles.sideA} />
        <img src={tails} className={styles.sideB} />
      </div>
      <h1>Toss</h1>
      <div className={styles.headOrTail}>
        <button
          style={{ backgroundColor: "#CD2126" }}
          className={`btn ${styles.btn}`}
          ref={headRef}
          onClick={onClick}
        >
          Head
        </button>
        <button
          style={{ backgroundColor: "#2897FE" }}
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
