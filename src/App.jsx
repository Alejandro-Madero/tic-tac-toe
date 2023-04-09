import { useState } from "react";
import { intialBoard } from "./utils/board";
import { TURNS, checkWinner } from "./utils/gameLogic";
import PlayerX from "./components/PlayerX";
import PlayerO from "./components/PlayerO";
import Square from "./components/Square";
import styles from "./App.module.css";

const App = () => {
  const [currentTurn, setCurrentTurn] = useState(TURNS.X);
  const [board, setBoard] = useState(intialBoard);
  const [winner, setWinner] = useState(false);
  console.log(currentTurn);
  const handleSquareClick = (index) => {
    if (board[index] || winner) return;
    // Get new board
    const newBoard = [...board];
    newBoard[index] = currentTurn;
    //Check if winner
    const isWinner = checkWinner(newBoard, currentTurn);
    //set winner and show modal
    console.log(isWinner);
    if (isWinner) setWinner(true);
    setBoard(newBoard);
    currentTurn === TURNS.X ? setCurrentTurn(TURNS.O) : setCurrentTurn(TURNS.X);
  };

  return (
    <main className={styles["game-container"]}>
      <h1>Tic Tac Toe</h1>
      <section className={styles["board-container"]}>
        {board.map((el, i) => {
          return (
            <Square key={i} index={i} onClick={handleSquareClick}>
              {board[i] === "X" && <PlayerX />}
              {board[i] === "O" && <PlayerO />}
            </Square>
          );
        })}
      </section>
    </main>
  );
};

export default App;
