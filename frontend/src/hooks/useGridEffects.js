import { useEffect } from "react";

export function useGenerateGrid(setGridDots) {
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
  }, [setGridDots]);
}

export function useTwinkleEffect(containerRef, gridDots) {
  useEffect(() => {
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
  }, [containerRef, gridDots]);
}
