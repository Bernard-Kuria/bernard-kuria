import React from "react";
import "./dots.css";

export default function Dots({ gridDots }) {
  return (
    <div className="dots">
      {gridDots.map((dot) => (
        <div
          className="dot"
          data-x={dot.x}
          data-y={dot.y}
          key={dot.key}
          style={{
            left: `${dot.x * 20}px`,
            top: `${dot.y * 20}px`,
          }}
        ></div>
      ))}
    </div>
  );
}
