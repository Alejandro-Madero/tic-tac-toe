import styles from "./CurrentTurn.module.css";

const currentTurn = ({ turn }) => {
  return (
    <div className={styles.turn}>
      <div
        className={`${styles.container} ${turn === "X" ? styles.active : ""}`}
      >
        <p>✕</p>
      </div>
      <div
        className={`${styles.container} ${turn === "O" ? styles.active : ""}`}
      >
        <p>◯</p>
      </div>
    </div>
  );
};

export default currentTurn;
