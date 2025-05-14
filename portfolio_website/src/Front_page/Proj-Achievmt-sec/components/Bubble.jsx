import "../styles/bubble.css";

export default function Bubble({ milestone }) {
  return (
    <div className="outer-reflection">
      <div className="bubble">
        <div className="inner-reflections">
          <div className="reflection-1"></div>
          <div className="reflection-2"></div>
          <div className="reflection-3"></div>
        </div>
        <h1 className="title">{milestone.title}</h1>
        <p className="click">Click to view</p>
      </div>
    </div>
  );
}
