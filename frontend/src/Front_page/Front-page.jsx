// hooks
import React, { useRef, useState } from "react";
import { useGenerateGrid, useTwinkleEffect } from "../hooks/useGridEffects";
import {
  mousehoverEffect,
  handleGridClick,
  centerOutwardWaveRadius,
} from "../hooks/useGridInteractions";

// components
import Overview from "./overview-section/Overview.jsx";
import About from "./about-section/About-me.jsx";
import ProjAchvmt from "./Proj-Achievmt-sec/ProjAchvmt.jsx";
import Dots from "./dots/Dots.jsx";

// css
import "./front-page.css";

export default function FrontPage({ AboutMe, initialMilestones }) {
  const containerRef = useRef(null);
  const [gridDots, setGridDots] = useState([]);

  // Effects for the grid
  useGenerateGrid(setGridDots);
  useTwinkleEffect(containerRef, gridDots);
  centerOutwardWaveRadius(containerRef, 5, { x: 10, y: 10 });

  return (
    <>
      <div
        className="grid-container"
        ref={containerRef}
        onMouseMove={(e) => mousehoverEffect(containerRef, e)}
        onClick={(e) => handleGridClick(containerRef, e)}
      >
        <Dots gridDots={gridDots} />
        <Overview />
        <About AboutMe={AboutMe} />
        <div className="border"></div>
        <ProjAchvmt initialMilestones={initialMilestones} />
        <div className="border"></div>
      </div>
    </>
  );
}
