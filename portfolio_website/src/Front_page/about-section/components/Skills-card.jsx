import "../styles/skills-card.css";

export default function Skill() {
  return (
    <div className="skills-card">
      <div className="card">
        <div className="card-front">
          <h3>Frontend Dev</h3>
          <p>HTML, CSS, JS</p>
        </div>
        <div className="card-back">
          <h3>Experience</h3>
          <p>2+ years building UIs</p>
        </div>
      </div>
    </div>
  );
}
