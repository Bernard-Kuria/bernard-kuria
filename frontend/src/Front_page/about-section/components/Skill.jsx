import "../styles/skills-card.css";

export default function Skill({ aboutTopic, front, back }) {
  return (
    <div className="skills-card">
      <div className="card">
        <div className="card-front">
          <h3>{aboutTopic}</h3>
          <h4 className="front">{front}</h4>
        </div>
        <div className="card-back">
          <div className="back">
            <ul>
              {back.map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
