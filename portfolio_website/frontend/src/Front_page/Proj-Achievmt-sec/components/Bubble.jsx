import { useEffect, useRef } from "react";
import "../styles/bubble.css";

export default function Bubble({
  milestone,
  handleClick,
  visibleYear,
  animation,
  isDummy = false,
  onDummyOut,
}) {
  const isVisible = isDummy ? true : Number(visibleYear) === milestone.year;
  const bubbleRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef(
    isDummy
      ? { x: (Math.random() - 0.5) * 1.5, y: -1 * (Math.random() * 1.5 + 0.5) }
      : { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }
  );

  useEffect(() => {
    if (!bubbleRef.current || !isVisible) return;

    const el = bubbleRef.current;
    const parent = el.parentElement;

    el.style.opacity = 100;
    if (!parent) return;

    const parentWidth = parent.clientWidth;
    const parentHeight = parent.clientHeight;
    const bubbleWidth = el.offsetWidth;
    const bubbleHeight = el.offsetHeight;

    if (isDummy) {
      pos.current.x = Math.random() * (parentWidth - bubbleWidth);
      pos.current.y = parentHeight - bubbleHeight;
    } else {
      pos.current.x = Math.random() * (parentWidth - bubbleWidth);
      pos.current.y = Math.random() * (parentHeight - bubbleHeight);
    }

    let animationFrameId;

    const animate = () => {
      if (isDummy) {
        pos.current.y += vel.current.y;
        el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
        if (pos.current.y + bubbleHeight < 0) {
          if (onDummyOut) onDummyOut(milestone.id);
          return;
        }
      } else {
        if (pos.current.x <= 0) {
          pos.current.x = 0;
          vel.current.x *= -1;
        } else if (pos.current.x + bubbleWidth >= parentWidth) {
          pos.current.x = parentWidth - bubbleWidth;
          vel.current.x *= -1;
        }
        if (pos.current.y <= 0) {
          pos.current.y = 0;
          vel.current.y *= -1;
        } else if (pos.current.y + bubbleHeight >= parentHeight) {
          pos.current.y = parentHeight - bubbleHeight;
          vel.current.y *= -1;
        }
        pos.current.x += vel.current.x;
        pos.current.y += vel.current.y;
        el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, isDummy, animation, milestone.id, onDummyOut]);

  return isVisible ? (
    <div
      className="outer-reflection"
      ref={animation ? bubbleRef : null}
      style={{
        width: `${
          window.innerWidth > 500
            ? milestone.bubbleSize
            : milestone.bubbleSize - 30
        }px`,
        height: `${
          window.innerWidth > 500
            ? milestone.bubbleSize
            : milestone.bubbleSize - 30
        }px`,
        display: milestone.display,
        position: animation ? "absolute" : "relative",
        opacity: animation && isDummy ? 0 : 1,
      }}
      onClick={() => handleClick(milestone.title)}
    >
      <div className="bubble">
        <div className="inner-reflections">
          <div className="reflection-1"></div>
          <div className="reflection-2"></div>
          <div className="reflection-3"></div>
        </div>
        {!isDummy && (
          <h2
            className="title"
            style={milestone.fontSize ? { fontSize: milestone.fontSize } : {}}
          >
            {milestone.title}
          </h2>
        )}
      </div>
    </div>
  ) : null;
}
