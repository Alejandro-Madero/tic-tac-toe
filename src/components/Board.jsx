import Square from "./Square";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";
import styles from "./Board.module.css";

const Board = ({ board, isWinner, onClick }) => {
  return (
    <section className={styles.board}>
      {board.map((_, i) => {
        return (
          <Square key={i} index={i} onClick={onClick} isWinner={isWinner}>
            {board[i] === "X" && <PlayerX />}
            {board[i] === "O" && <PlayerO />}
          </Square>
        );
      })}
    </section>
  );
};

export default Board;
