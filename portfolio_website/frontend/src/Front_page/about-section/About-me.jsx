import Skill from "./components/Skill.jsx";

import "./styles/about.css";

export default function AboutMe({ AboutMe }) {
  return (
    <div className="about-me">
      <h2 className="section-title">About Me</h2>
      <div className="skills">
        {Object.entries(AboutMe).map(([aboutTopic, about]) => (
          <Skill key={aboutTopic} aboutTopic={aboutTopic} {...about} />
        ))}
      </div>
    </div>
  );
}
