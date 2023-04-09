import styles from "./Overlay.module.css";

const Overlay = ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
};

export default Overlay;
