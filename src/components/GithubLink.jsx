import Github from "../assets/github.svg";
import styles from "./GithubLink.module.css";

const GithubLink = () => {
  return (
    <a
      href="https://github.com/Alejandro-Madero/tic-tac-toe"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit the proyect's Github repository"
    >
      <svg className={styles.logo}>
        <use href={`${Github}#github`}></use>
      </svg>
    </a>
  );
};

export default GithubLink;
