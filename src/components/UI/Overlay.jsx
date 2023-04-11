import styles from "./Overlay.module.css";

const Overlay = ({ children, onClick }) => {
  return (
    <div className={styles.overlay} onClick={onClick}>
      {children}
    </div>
  );
};

export default Overlay;
