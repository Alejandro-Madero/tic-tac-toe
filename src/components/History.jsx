import { useState, useEffect } from "react";
import Button from "./UI/Button";
import styles from "./History.module.css";
const History = ({ children, history, onShowHistory, move }) => {
  const handleClick = (index) => onShowHistory(index);

  return (
    <aside className={styles.history}>
      <div className={styles["btns-container"]}>
        {history.map((board, i) => {
          return (
            <div key={i} className={styles.move}>
              <span>{i}.</span>
              <Button
                onClick={() => handleClick(i)}
                className={`${styles.btn} ${i === move ? styles.selected : ""}`}
              >
                {i === 0 ? "Game Start" : "Move #" + i}
              </Button>
            </div>
          );
        }) || []}
      </div>
    </aside>
  );
};

export default History;
