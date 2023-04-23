import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import {
  initialBoard,
  TURNS,
  checkWinner,
  isGameFinished,
} from "./utils/gameLogic";
import { confettiOptions } from "./utils/confettiOptions";
import { compareBoard } from "./utils/compareBoard";
import CurrentTurn from "./components/CurrentTurn";
import Board from "./components/Board";
import WinnerModal from "./components/WinnerModal";
import Overlay from "./components/UI/Overlay";
import Button from "./components/UI/Button";
import GithubLink from "./components/GithubLink";
import History from "./components/History";
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
  const [resetScore, setResetScore] = useState(false);

  const handleSquareClick = (index) => {
    if (board[index] || gameFinished) return;

    const newBoard = [...board];
    newBoard[index] = currentTurn;

    if (!compareBoard(board, history.at(-1))) return;

    setBoard(newBoard);
    setHistory((prevHistory) => [...prevHistory, newBoard]);
    setCurrentMove(history.length);

    const isWinner = checkWinner(newBoard, currentTurn);

    if (isWinner) {
      setWinner(currentTurn);
      setWinningCombo(isWinner);
      setGameFinished(true);
      return setShowModal(true);
    }

    if (isGameFinished(newBoard)) {
      setGameFinished(true);
      return setShowModal(true);
    }
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

  const handleResetScore = () => setResetScore(!resetScore);
  const handleCloseModal = () => setShowModal(false);
  const handleShowHistory = (index) => {
    setCurrentMove(index);
    setBoard(history[index]);
  };

  useEffect(() => {
    if (!winner) return;
    confetti(confettiOptions());
  }, [winner]);

  return (
    <>
      <main className={styles["app-container"]}>
        <GithubLink />
        <article className={styles["game-container"]}>
          <CurrentTurn turn={currentTurn} />
          <PlayerScore winner={winner} resetScore={resetScore} />
          <Board
            board={board}
            isWinner={winningCombo}
            onClick={handleSquareClick}
          />
          <div className={styles["btns-container"]}>
            <Button
              className={styles["play-reset-btn"]}
              onClick={handleResetGame}
            >
              Play Again
            </Button>
            <Button
              className={styles["play-reset-btn"]}
              onClick={handleResetScore}
            >
              Reset Scores
            </Button>
          </div>
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
