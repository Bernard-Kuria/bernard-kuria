import "./front-page.css";
import Overview from "./overview-section/Overview.jsx";
import About from "./about-section/About-me.jsx";
import ProjAchvmt from "./Proj-Achievmt-sec/ProjAchvmt.jsx";
import React, { useEffect, useRef, useState } from "react";

export default function FrontPage({ AboutMe, initialMilestones }) {
  const containerRef = useRef(null);
  const [gridDots, setGridDots] = useState([]);

  useEffect(() => {
    function generateGrid() {
      const dotSize = 20;
      const cols = Math.ceil(window.innerWidth / dotSize);
      const rows = Math.ceil(document.documentElement.scrollHeight / dotSize);
      const dots = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          dots.push({ x, y, key: `${x}-${y}` });
        }
      }
      setGridDots(dots);
    }

    generateGrid();
    window.addEventListener("resize", generateGrid);
    return () => window.removeEventListener("resize", generateGrid);
  }, []);

  useEffect(() => {
    // Twinkling effect for the rendered dots
    function twinkleEffect() {
      const dotNodes = containerRef.current?.querySelectorAll(".dot") || [];
      if (dotNodes.length === 0) return;
      const dotSize = 20;
      const cols = Math.ceil(window.innerWidth / dotSize);
      const rows = Math.ceil(document.documentElement.scrollHeight / dotSize);
      for (let dot of dotNodes) {
        const randomCol = Math.trunc(Math.random() * cols);
        const randomRow = Math.trunc(Math.random() * rows);
        if (
          randomCol === parseInt(dot.dataset.x) &&
          randomRow === parseInt(dot.dataset.y)
        ) {
          dot.classList.add("glow");
          setTimeout(() => dot.classList.remove("glow"), 600);
        }
      }
    }
    const interval = setInterval(twinkleEffect, 100);
    return () => clearInterval(interval);
  }, [gridDots]);

  // Mouse hover effect
  function mousehoverEffect(e) {
    const container = containerRef.current;
    if (!container) return;
    const dots = container.querySelectorAll(".dot");
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xIndex = Math.floor(mouseX / 20);
    const yIndex = Math.floor(mouseY / 20);

    for (let dot of dots) {
      const x = parseInt(dot.dataset.x);
      const y = parseInt(dot.dataset.y);
      const distance = Math.hypot(x - xIndex, y - yIndex);

      if (distance < 1) {
        dot.classList.add("glow");
        setTimeout(() => dot.classList.remove("glow"), 300);
      }
    }
  }
  // Spreads the wave outward up to a given radius from the center
  function centerOutwardWaveRadius(maxRadius, center = null) {
    const container = containerRef.current;
    if (!container) return;
    const dots = container.querySelectorAll(".dot");
    const dotSize = 20;
    const cols = Math.ceil(window.innerWidth / dotSize);
    const rows = Math.ceil(document.documentElement.scrollHeight / dotSize);

    let centerX, centerY;
    if (
      center &&
      typeof center.x === "number" &&
      typeof center.y === "number"
    ) {
      centerX = center.x;
      centerY = center.y;
    } else {
      centerX = Math.floor(cols / 2);
      centerY = Math.floor(rows / 2);
    }

    for (let dot of dots) {
      const dotX = parseInt(dot.dataset.x);
      const dotY = parseInt(dot.dataset.y);
      const distance = Math.hypot(dotX - centerX, dotY - centerY);

      if (distance <= maxRadius) {
        const waveDelay = distance * 50 + Math.sin(distance * 0.3) * 100;
        setTimeout(() => {
          dot.classList.add("glow");
          setTimeout(() => dot.classList.remove("glow"), 600);
        }, waveDelay);
      }
    }
  }

  // Handle click event on grid container
  function handleGridClick(e) {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xIndex = Math.floor(mouseX / 20);
    const yIndex = Math.floor(mouseY / 20);
    centerOutwardWaveRadius(4, { x: xIndex, y: yIndex });
  }

  return (
    <>
      <div
        className="grid-container"
        ref={containerRef}
        onMouseMove={(e) => mousehoverEffect(e)}
        onClick={(e) => handleGridClick(e)}
      >
        <div className="dots">
          {gridDots.map((dot) => (
            <div
              className="dot"
              data-x={dot.x}
              data-y={dot.y}
              key={dot.key}
              style={{
                position: "absolute",
                left: `${dot.x * 20}px`,
                top: `${dot.y * 20}px`,
                borderRadius: "50%",
              }}
            ></div>
          ))}
        </div>
        <Overview />
        <About AboutMe={AboutMe} />
        <div className="border"></div>
        <ProjAchvmt initialMilestones={initialMilestones} />
        <div className="border"></div>
      </div>
    </>
  );
}
