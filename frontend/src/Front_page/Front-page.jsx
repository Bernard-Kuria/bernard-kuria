// hooks
import React, { useRef, useState, useEffect } from "react";
import { useGenerateGrid, useTwinkleEffect } from "../hooks/useGridEffects";
import {
  mousehoverEffect,
  handleGridClick,
  centerOutwardWaveRadius,
} from "../hooks/useGridInteractions";
import axios from "axios";

// components
import Overview from "./overview-section/Overview.jsx";
import About from "./about-section/About-me.jsx";
import ProjAchvmt from "./Proj-Achievmt-sec/ProjAchvmt.jsx";
import Dots from "./dots/Dots.jsx";

// css
import "./front-page.css";

export default function FrontPage() {
  const API = import.meta.env.VITE_FUNCTIONS_URL;
  const containerRef = useRef(null);
  const [gridDots, setGridDots] = useState([]);
  const [initialMilestones, setInitialMilestones] = useState([]);

  // 2. Fetch Milestones data from the API
  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const res = await axios.get(`${API}/milestones`);
        setInitialMilestones(res.data);
      } catch (error) {
        console.error("Failed to fetch Milestones data", error);
      }
    };

    fetchMilestones();
  }, [API]);

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
        <About />
        <div className="border"></div>
        {initialMilestones.length !== 0 ? (
          <ProjAchvmt initialMilestones={initialMilestones} />
        ) : null}
        <div className="border"></div>
      </div>
    </>
  );
}
