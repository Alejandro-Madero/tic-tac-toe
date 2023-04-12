import styles from "./WinnerModal.module.css";
import Square from "./Square";
import PlayerX from "./PlayerX";
import PlayerO from "./PlayerO";
import Button from "./UI/Button";

const winningPlayer = new Map([
  ["X", <PlayerX />],
  ["O", <PlayerO />],
  ["=", "🤝"],
]);

const WinnerModal = ({ winner, onClick }) => {
  const headerMessage =
    winningPlayer.get(winner) === "🤝" ? "Empate" : "Ganador";

  return (
    <div className={styles.modal}>
      <header>
        <h2>{headerMessage}</h2>
      </header>
      <div className={styles["modal-content"]}>
        <Square className={styles["modal-square"]} onClick={() => ""}>
          {winningPlayer.get(winner)}
        </Square>
      </div>
      <footer className={styles["modal-footer"]}>
        <Button className={styles["modal-btn"]} onClick={onClick}>
          Ok
        </Button>
      </footer>
    </div>
  );
};

export default WinnerModal;
