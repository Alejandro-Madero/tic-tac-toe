import styles from "./Square.module.css";

const squareBorders = new Map([
  [0, [styles.top, styles.left]],
  [1, [styles.top]],
  [2, [styles.top, styles.right]],
  [4, []],
  [3, [styles.left]],
  [5, [styles.right]],
  [6, [styles.left, styles.bottom]],
  [7, [styles.bottom]],
  [8, [styles.right, styles.bottom]],
]);

const Square = ({ children, onClick, index, isWinner, className }) => {
  const winner = isWinner?.includes(index) ? "is-winner" : "";

  const handleClick = () => onClick(index);
  return (
    <div
      className={`${styles.square} ${squareBorders.get(index)?.join(" ")} ${
        styles[winner]
      } ${className || ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Square;
