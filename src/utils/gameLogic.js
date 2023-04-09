export const initialBoard = Array(9).fill(null);

export const TURNS = {
  X: "X",
  O: "O",
};

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (board, turn) => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    const [pos1, pos2, pos3] = [board[a], board[b], board[c]];

    const isWinner = [pos1, pos2, pos3].every((el) => el === turn);
    if (!isWinner) continue;
    return [true, combination];
  }

  return false;
};
