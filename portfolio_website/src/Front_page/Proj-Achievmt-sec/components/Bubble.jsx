import { useEffect, useRef } from "react";
import "../styles/bubble.css";

export default function Bubble({
  milestone,
  handleClick,
  visibleYear,
  animation,
}) {
  const isVisible = Number(visibleYear) === milestone.year;
  const bubbleRef = useRef(null);
  const pos = useRef({
    x: 0,
    y: 0,
  });
  const vel = useRef({
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2,
  });

  useEffect(() => {
    if (!bubbleRef.current || !isVisible) return;

    const el = bubbleRef.current;
    let animationFrameId;

    const animate = () => {
      const parent = el.parentElement;
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();
      const bubbleRect = el.getBoundingClientRect();

      // Bounce off walls
      if (
        pos.current.x <= 0 ||
        bubbleRect.right >= parentRect.right ||
        bubbleRect.left <= parentRect.left
      ) {
        vel.current.x *= -1;
      }
      if (
        pos.current.y <= 0 ||
        bubbleRect.top <= parentRect.top ||
        bubbleRect.bottom >= parentRect.bottom
      ) {
        vel.current.y *= -1;
      }

      // Update position
      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  return isVisible ? (
    <div
      className="outer-reflection"
      ref={animation ? bubbleRef : null}
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
      </div>
    </div>
  ) : null;
}
