import { useState } from "react";
import {
  initialBoard,
  TURNS,
  checkWinner,
  isGameFinished,
} from "./utils/gameLogic";
import PlayerX from "./components/PlayerX";
import PlayerO from "./components/PlayerO";
import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";
import Overlay from "./components/UI/Overlay";
import Button from "./components/UI/Button";
import styles from "./App.module.css";

const App = () => {
  const [currentTurn, setCurrentTurn] = useState(TURNS.X);
  const [board, setBoard] = useState(initialBoard);
  const [winner, setWinner] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [winningCombo, setWinningCombo] = useState(null);

  const handleSquareClick = (index) => {
    // check if game finished or square is already filled
    if (board[index] || gameFinished) return;

    // Get new board
    const newBoard = [...board];
    newBoard[index] = currentTurn;

    //set winner and show modal
    setBoard(newBoard);

    //Check if winner
    const isWinner = checkWinner(newBoard, currentTurn);

    //Check if
    if (isWinner) {
      setWinner(currentTurn);
      setWinningCombo(isWinner);
      setGameFinished(true);
      return;
    }
    //Check if game finished
    if (isGameFinished(newBoard)) return setGameFinished(true);

    // if no winner change turn
    currentTurn === TURNS.X ? setCurrentTurn(TURNS.O) : setCurrentTurn(TURNS.X);
  };

  const handleResetGame = () => {
    setCurrentTurn(TURNS.X);
    setBoard(initialBoard);
    setWinner(null);
    setGameFinished(false);
    setWinningCombo(null);
  };

  return (
    <>
      <main className={styles["game-container"]}>
        <h1>Tic Tac Toe</h1>
        <section className={styles["board-container"]}>
          {board.map((el, i) => {
            return (
              <Square
                key={i}
                index={i}
                onClick={handleSquareClick}
                isWinner={winningCombo}
              >
                {board[i] === "X" && <PlayerX />}
                {board[i] === "O" && <PlayerO />}
              </Square>
            );
          })}
        </section>
        {gameFinished && (
          <Overlay>
            <WinnerModal winner={winner || "="} />
          </Overlay>
        )}
        <Button className={styles["start-again-btn"]} onClick={handleResetGame}>
          Start Again
        </Button>
      </main>
    </>
  );
};

export default App;
