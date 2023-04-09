import styles from "./WinnerModal.module.css";
import Square from "./Square";
import PlayerX from "./PlayerX";
import PlayerO from "./PlayerO";

const WinnerModal = () => {
  return (
    <div className={styles.modal}>
      <header>
        <h2>Ganador</h2>
      </header>
      <div></div>
      <footer>
        <button>Okay</button>
      </footer>
    </div>
  );
};

export default WinnerModal;
