export const compareBoard = (board, lastBoard) => {
  const isSameBoard = board
    .map((el, i) => el === lastBoard[i])
    .every((el) => el === true);

  return isSameBoard;
};
