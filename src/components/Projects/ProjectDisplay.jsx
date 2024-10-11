import React from "react";
import { createPortal } from "react-dom";
import styles from "./ProjectDisplay.module.scss";

const ProjectDisplay = ({ details }) => {
  const { title, description, codeLink, deployLink, screenshot } = details;

  const [showImg, setShowImg] = React.useState(false);

  const clickHandler = (e) => {
    if (Object.values(e.target)[0].type !== "img") setShowImg(false);
  };

  return (
    <>
      <div className={styles["project-display"]}>
        <div className={styles["image-container"]}>
          <img
            src={screenshot}
            alt={`${title} Screenshot`}
            className={styles["project-screenshot"]}
            onClick={() => setShowImg(true)}
          />
        </div>
        <div className={styles["info-container"]}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.buttons}>
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
            <a href={deployLink} target="_blank" rel="noopener noreferrer">
              View Deployment
            </a>
          </div>
        </div>
      </div>
      {showImg &&
        createPortal(
          <div className={styles.modal} onClick={clickHandler}>
            <img src={screenshot} alt={`${title} Screenshot`} />
          </div>,
          document.body
        )}
    </>
  );
};

export default ProjectDisplay;
