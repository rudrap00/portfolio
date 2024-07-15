import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaSquareGithub,
  FaWhatsapp,
} from "react-icons/fa6";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <div className={styles.h1}>Hello</div>
        <div className={styles.h2}>I'm Rudra</div>
        <div className={styles.links}>
          <a
            href="https://github.com/rudrap00"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/rudra-pratap-ac3/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:rudrap99.dba@gmail.com"
            title="rudrap99.dba@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope size={32} />
          </a>
          <a href="https://wa.me/919205750356" target="_blank" rel="noreferrer">
            <FaWhatsapp size={32} />
          </a>
        </div>
      </div>
      <div className={styles.content}>
        Passionate about problem solving and learning technologies. A tech
        enthusiast constantly learning and passionate about web development,
        with strong knowledge of JavaScript, HTML/CSS, Java, React.js, Node.js,
        SQL/NoSQL, JWT authentication, and authorization.
      </div>
    </div>
  );
};

export default Header;
