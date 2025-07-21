import { useEffect } from "react";

function randomId() {
  return "dummy-" + Math.random().toString(36).slice(2, 10);
}

export function BubbleSpawner({
  setDummyBubbles,
  dummyMilestone,
  displayDummy,
}) {
  useEffect(() => {
    const interval = setInterval(() => {
      setDummyBubbles((prev) => {
        // Limit max bubbles on screen at once (e.g., 5)
        if (prev.length >= 5) return prev;
        return [
          ...prev,
          {
            ...dummyMilestone,
            id: randomId(),
          },
        ];
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [displayDummy, dummyMilestone, setDummyBubbles]);
}
