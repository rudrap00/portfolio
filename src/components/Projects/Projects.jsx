import React from "react";
import utilitiesReactImg from "../../assets/Currency Converter.png";
import foodOrderImg from "../../assets/Food Order App.png";
import jobsBoardImg from "../../assets/Jobs Board.png";
import paymentsImg from "../../assets/Payments.png";
import ProjectDisplay from "./ProjectDisplay";
import styles from "./Projects.module.scss";

const Projects = () => {
  const projectList = [
    {
      title: "Jobs Board",
      description:
        "Web application where one can look for job openings which has features like infinite scroll and filters to search for preferred jobs.",
      codeLink: "https://github.com/rudrap00/jobs-board/",
      deployLink: "https://rudrap00.github.io/jobs-board/",
      screenshot: jobsBoardImg,
    },
    {
      title: "Utilities Web App",
      description:
        "Web application where one can generate password and access curreny converter.",
      codeLink: "https://github.com/rudrap00/utilities-react/",
      deployLink: "https://rudrap00.github.io/utilities-react/",
      screenshot: utilitiesReactImg,
    },
    {
      title: "Food Order App",
      description:
        "Web application for placing orders, with a cart to track the order.",
      codeLink: "https://github.com/rudrap00/Food-Order-App/tree/master",
      deployLink: "https://rudrap00.github.io/Food-Order-App/",
      screenshot: foodOrderImg,
    },
    {
      title: "Payments Dashboard",
      description:
        "Web application for tracking payments with interactive UI, and features for filtering transactions.",
      codeLink: "https://github.com/rudrap00/frontend-bootcamp",
      deployLink: "https://rudrap00.github.io/frontend-bootcamp/#/Payments",
      screenshot: paymentsImg,
    },
  ];

  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <ProjectDisplay key={index} details={project} />
      ))}
    </div>
  );
};

export default Projects;
