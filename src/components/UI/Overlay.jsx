import { createPortal } from "react-dom";
import styles from "./Overlay.module.css";

const Overlay = ({ children, onClick }) => {
  return createPortal(
    <div className={styles.overlay} onClick={onClick}>
      {children}
    </div>,
    document.body
  );
};

export default Overlay;
