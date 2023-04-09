import styles from "./PlayerX.module.css";

const PlayerX = () => {
  return (
    <>
      <div className={styles["x-left"]}></div>
      <div className={styles["x-right"]}></div>
    </>
  );
};

export default PlayerX;
