import styles from "./PlayerO.module.css";
export const PlayerO = () => {
  return (
    <div className={styles["o-container"]}>
      <div className={styles.o}></div>
    </div>
  );
};

export default PlayerO;
