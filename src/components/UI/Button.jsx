import { useState } from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  return (
    <button
      className={`${styles.btn} ${className} ${
        isHovered ? styles["mobile-hover"] : ""
      }
       `}
      onClick={onClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </button>
  );
};

export default Button;
