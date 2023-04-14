import { useState, useEffect } from "react";
import styles from "./PlayerScore.module.css";

const PlayerScore = ({ winner }) => {
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  useEffect(() => {
    switch (winner) {
      case "X":
        setScoreX((prevScore) => prevScore + 1);
        break;
      case "O":
        setScoreO((prevScore) => prevScore + 1);
        break;
    }
  }, [winner]);

  return (
    <section class={styles.score}>
      <div className={styles["player-container"]}>
        <h3>Player ✕:</h3>
        <span>{scoreX}</span>
      </div>
      <div className={styles["player-container"]}>
        <h3>Player ◯:</h3>
        <span>{scoreO}</span>
      </div>
    </section>
  );
};

export default PlayerScore;
