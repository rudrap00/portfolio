import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Projects />
    </div>
  );
};

export default App;
