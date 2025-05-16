import "../styles/bubble.css";

export default function Bubble({ milestone, handleClick, visibleYear }) {
  // Convert visibleYear to number for comparison
  const isVisible = Number(visibleYear) === milestone.year;

  return (
    isVisible ? (
      <div
        className="outer-reflection"
        style={{
          width: milestone.bubbleSize,
          height: milestone.bubbleSize,
          display: milestone.display,
        }}
      >
        <div className="bubble" onClick={() => handleClick(milestone.title)}>
          <div className="inner-reflections">
            <div className="reflection-1"></div>
            <div className="reflection-2"></div>
            <div className="reflection-3"></div>
          </div>
          <h2
            className="title"
            style={milestone.fontSize ? { fontSize: milestone.fontSize } : {}}
          >
            {milestone.title}
          </h2>
          {milestone.bubbleSize > "150px" ? (
            <p className="click">Click to view</p>
          ) : (
            ""
          )}
        </div>
      </div>
    ) : (
      ""
    )
  );
}
