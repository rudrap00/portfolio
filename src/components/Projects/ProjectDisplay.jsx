import React from "react";
import styles from "./ProjectDisplay.module.scss";

const ProjectDisplay = ({ details }) => {
  const { title, description, codeLink, deployLink, screenshot } = details;

  return (
    <div className={styles["project-display"]}>
      <div className={styles["image-container"]}>
        <img
          src={screenshot}
          alt={`${title} Screenshot`}
          className={styles["project-screenshot"]}
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
  );
};

export default ProjectDisplay;
