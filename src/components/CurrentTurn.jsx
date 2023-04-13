import styles from "./CurrentTurn.module.css";

const currentTurn = ({ turn }) => {
  return (
    <>
      <h2 className={styles.title}>Turn</h2>
      <div className={styles.container}>
        <div
          className={`${styles["turn-container"]} ${
            turn === "X" ? styles.active : ""
          }`}
        >
          <p>✕</p>
        </div>
        <div
          className={`${styles["turn-container"]} ${
            turn === "O" ? styles.active : ""
          }`}
        >
          <p>◯</p>
        </div>
      </div>
    </>
  );
};

export default currentTurn;
