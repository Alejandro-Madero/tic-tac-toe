import { useState, useEffect } from "react";
import styles from "./PlayerScore.module.css";

const PlayerScore = ({ winner, resetScore }) => {
  const [playerXScore, setPlayerXScore] = useState(0);
  const [playerOScore, setPlayerOScore] = useState(0);

  useEffect(() => {
    switch (winner) {
      case "X":
        setPlayerXScore((prevScore) => prevScore + 1);
        break;
      case "O":
        setPlayerOScore((prevScore) => prevScore + 1);
        break;
    }
  }, [winner]);

  useEffect(() => {
    setPlayerXScore(0);
    setPlayerOScore(0);
  }, [resetScore]);

  return (
    <section class={styles.score}>
      <div className={styles["player-container"]}>
        <h3>Player ✕:</h3>
        <span>{playerXScore}</span>
      </div>
      <div className={styles["player-container"]}>
        <h3>Player ◯:</h3>
        <span>{playerOScore}</span>
      </div>
    </section>
  );
};

export default PlayerScore;
