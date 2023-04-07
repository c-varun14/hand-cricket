import styles from "./BatOrBowl.module.css";

export default function BatOrBowl({ setBatter }) {
  const batOrBowlHandler = (e) => {
    if (e.target.innerText === "Bat") setBatter("user");
    else setBatter("computer");
  };
  return (
    <div>
      <h2 className={styles.greeting}>Congrats, You Won The Toss</h2>
      <h3 className={styles.batOrBowlText}>You want to Bat or Bowl</h3>
      <div className="flex">
        <button
          onClick={batOrBowlHandler}
          className="btn"
          style={{ backgroundColor: "#FE8D3B" }}
        >
          Bat
        </button>
        <button
          onClick={batOrBowlHandler}
          className="btn"
          style={{ backgroundColor: "#69151B" }}
        >
          Bowl
        </button>
      </div>
    </div>
  );
}
