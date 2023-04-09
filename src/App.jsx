import { useState } from "react";
import { initialBoard, TURNS, checkWinner } from "./utils/gameLogic";
import PlayerX from "./components/PlayerX";
import PlayerO from "./components/PlayerO";
import Square from "./components/Square";
import styles from "./App.module.css";
import WinnerModal from "./components/WinnerModal";
import Overlay from "./components/UI/Overlay";

const App = () => {
  const [currentTurn, setCurrentTurn] = useState(TURNS.X);
  const [board, setBoard] = useState(initialBoard);
  const [winner, setWinner] = useState(false);

  const handleSquareClick = (index) => {
    // check if game finished or square is already filled
    if (board[index] || winner) return;

    // Get new board
    const newBoard = [...board];
    newBoard[index] = currentTurn;

    //Check if winner
    const isWinner = checkWinner(newBoard, currentTurn);
    console.log(isWinner);
    //set winner and show modal
    setBoard(newBoard);
    if (isWinner) return setWinner(isWinner);

    // if no winner change turn
    currentTurn === TURNS.X ? setCurrentTurn(TURNS.O) : setCurrentTurn(TURNS.X);
  };

  return (
    <main className={styles["game-container"]}>
      <h1>Tic Tac Toe</h1>
      <section className={styles["board-container"]}>
        {board.map((el, i) => {
          return (
            <Square
              key={i}
              index={i}
              onClick={handleSquareClick}
              isWinner={winner[1]}
            >
              {board[i] === "X" && <PlayerX />}
              {board[i] === "O" && <PlayerO />}
            </Square>
          );
        })}
      </section>
      {/* {winner && (
        <Overlay>
          <WinnerModal />
        </Overlay>
      )} */}
    </main>
  );
};

export default App;
