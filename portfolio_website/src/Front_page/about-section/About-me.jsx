import Skill from "./components/Skills-card.jsx";

import "./styles/about.css";

export default function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="section-title">About Me</h2>
      <div className="skills">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
}
