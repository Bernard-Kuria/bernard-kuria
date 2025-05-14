import { useEffect } from "react";
import Me from "./components/Me.jsx";
import "./styles/overview.css";

export default function Overview() {
  useEffect(() => {
    const slideborderglow = () => {
      const slideSpeed = 50;
      const borderGlow1 = document.querySelector(".section-border-1__glow");
      const borderGlow2 = document.querySelector(".section-border-2__glow");

      const startAnimation = () => {
        // First animation: Fade in
        const movement1 = borderGlow1.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          {
            duration: 500, // Fade-in duration
            fill: "forwards",
          }
        );

        const movement2 = borderGlow2.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          {
            duration: 500,
            fill: "forwards",
          }
        );

        // Second animation: Movement
        movement1.onfinish = () => {
          const move1 = borderGlow1.animate(
            [{ transform: `translateX(calc(75vw - 45px))` }],
            {
              duration: slideSpeed * 100,
              fill: "backwards",
            }
          );

          move1.onfinish = () => {
            startAnimation();
          };
        };

        movement2.onfinish = () => {
          borderGlow2.animate(
            [{ transform: `translateX(calc(-72vw + 45px))` }],
            {
              duration: slideSpeed * 100,
              fill: "backwards",
            }
          );
        };
      };

      // Start the animation sequence
      startAnimation();
    };

    slideborderglow();
  }, []);

  return (
    <div className="overview">
      <div className="overview-section-border">
        <div className="section-border-1"></div>
        <div className="section-border-1__glow"></div>
        <div className="section-border-2"></div>
        <div className="section-border-2__glow"></div>
      </div>
      <Me />
    </div>
  );
}
