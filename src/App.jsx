import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import {
  initialBoard,
  TURNS,
  checkWinner,
  isGameFinished,
} from "./utils/gameLogic";
import { confettiOptions } from "./utils/confettiOptions";
import CurrentTurn from "./components/CurrentTurn";
import PlayerX from "./components/PlayerX";
import PlayerO from "./components/PlayerO";
import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";
import Overlay from "./components/UI/Overlay";
import Button from "./components/UI/Button";
import GithubLink from "./components/GithubLink";
import History from "./components/History";
import { compareBoard } from "./utils/compareBoard";
import PlayerScore from "./components/PlayerScore";
import styles from "./App.module.css";

const App = () => {
  const [currentTurn, setCurrentTurn] = useState(TURNS.X);
  const [currentMove, setCurrentMove] = useState(0);
  const [board, setBoard] = useState(initialBoard);
  const [history, setHistory] = useState([initialBoard]);
  const [winner, setWinner] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [winningCombo, setWinningCombo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSquareClick = (index) => {
    // check if game finished or square is already filled
    if (board[index] || gameFinished) return;

    // Get new board
    const newBoard = [...board];
    newBoard[index] = currentTurn;

    //Check if board displayed is the current board (not history)

    if (!compareBoard(board, history.at(-1))) return;

    //set new board & update history
    setBoard(newBoard);
    setHistory((prevHistory) => [...prevHistory, newBoard]);
    setCurrentMove(history.length);
    //Check if winner
    const isWinner = checkWinner(newBoard, currentTurn);

    //Check if
    if (isWinner) {
      setWinner(currentTurn);
      setWinningCombo(isWinner);
      setGameFinished(true);
      return setShowModal(true);
    }
    //Check if game finished
    if (isGameFinished(newBoard)) {
      setGameFinished(true);
      return setShowModal(true);
    }

    // if no winner change turn
    currentTurn === TURNS.X ? setCurrentTurn(TURNS.O) : setCurrentTurn(TURNS.X);
  };

  const handleResetGame = () => {
    setCurrentTurn(TURNS.X);
    setBoard(initialBoard);
    setWinner(null);
    setGameFinished(false);
    setWinningCombo(null);
    setShowModal(false);
    setHistory([initialBoard]);
    setCurrentMove(0);
  };

  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (!winner) return;
    confetti(confettiOptions());
  }, [winner]);

  const handleShowHistory = (index) => {
    console.log(index);
    setCurrentMove(index);
    setBoard(history[index]);
  };

  return (
    <>
      <main className={styles["app-container"]}>
        <GithubLink />
        <article className={styles["game-container"]}>
          <CurrentTurn turn={currentTurn} />
          <PlayerScore winner={winner} />
          <section className={styles.board}>
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

          <Button
            className={styles["start-again-btn"]}
            onClick={handleResetGame}
          >
            Play Again
          </Button>
        </article>
        <History
          history={history}
          onShowHistory={handleShowHistory}
          move={currentMove}
        />
      </main>
      {showModal && (
        <Overlay onClick={handleCloseModal}>
          <WinnerModal winner={winner || "="} onClick={handleCloseModal} />
        </Overlay>
      )}
    </>
  );
};

export default App;
