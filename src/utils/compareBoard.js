export const compareBoard = (board, lastBoard) => {
  if (!lastBoard) return true;

  const isSameBoard = board
    .map((el, i) => el === lastBoard[i])
    .every((el) => el === true);

  return isSameBoard;
};
