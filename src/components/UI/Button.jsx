import styles from "./Button.module.css";

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
