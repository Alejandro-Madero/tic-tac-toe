import styles from "./PlayerO.module.css";
export const PlayerO = () => {
  return (
    <div className={styles["arc-container"]}>
      <div className={styles["left-arc"]}></div>
      <div className={styles["right-arc"]}></div>
    </div>
  );
};

export default PlayerO;
