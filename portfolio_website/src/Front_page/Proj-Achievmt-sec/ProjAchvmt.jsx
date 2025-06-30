import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bubble from "./components/Bubble.jsx";
import AboutTitle from "./components/AboutTitle.jsx";
import "./styles/projAchvmt.css";

const dummyMilestone = {
  id: "dummy",
  year: null,
  title: "",
  bubbleSize: "60px",
  description: "",
  clicked: false,
  display: "block",
  popped: false,
  isDummy: true,
};

// Helper to generate a random id
function randomId() {
  return "dummy-" + Math.random().toString(36).slice(2, 10);
}

export default function ProjAchvmt({ initialMilestones }) {
  const [milestones, setMilestones] = useState(initialMilestones);
  const [currentMilestone, setCurrentMilestone] = useState(() => {
    const found = Object.values(initialMilestones).find(
      (milestone) => milestone.clicked === true
    );
    return { ...found, popped: true };
  });
  const [displayAboutTitle, setdisplayAboutTitle] = useState(false);
  const [bubblesPopped, setBubblesPopped] = useState(false);
  currentMilestone.popped = true;

  const years = Object.values(milestones).map((milestone) => milestone.year);
  const yearsSet = [...new Set(years)];
  const sortedYears = yearsSet.sort((a, b) => a - b);
  const [visibleYear, setVisibleYear] = useState(yearsSet[0]);
  const [animation, setAnimation] = useState(true);
  const [numberOfBubbles, setNumberOfBubbles] = useState(0);
  const [dummyBubbles, setDummyBubbles] = useState([]);
  const bubblesRef = useRef(null);
  const [displayDummy, setDisplayDummy] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  // Dummy bubble spawner
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
    }, 1200); // 1.2 seconds between spawns (adjust as needed)
    return () => clearInterval(interval);
  }, [displayDummy]);

  function handleClick(newClickedTitle) {
    setdisplayAboutTitle(true);
    const updatedMilestones = { ...milestones };
    for (let milestone in updatedMilestones) {
      updatedMilestones[milestone].clicked =
        updatedMilestones[milestone].title === newClickedTitle;
    }
    setMilestones(updatedMilestones);

    const updatedMilestone = Object.values(updatedMilestones).find(
      (milestone) => milestone.title === newClickedTitle
    );
    setCurrentMilestone(updatedMilestone);
    displayNone(updatedMilestones);
    setAnimation(false);
    setNumberOfBubbles(numberOfBubbles + 1);
    setDisplayDummy(false); // Stop spawning dummy bubbles
  }

  function displayAll() {
    const updatedMilestones = { ...milestones };
    for (let milestone in updatedMilestones) {
      if (updatedMilestones[milestone].popped === false) {
        updatedMilestones[milestone].display = "block";
      }
    }
    setMilestones(updatedMilestones);
  }

  function displayNone(updatedMilestones = milestones) {
    const newMilestones = { ...updatedMilestones };
    for (let milestone in newMilestones) {
      newMilestones[milestone].display = "none";
    }
    setMilestones(newMilestones);
  }

  function refreshBubbles() {
    const updatedMilestones = { ...milestones };
    for (let milestone in updatedMilestones) {
      updatedMilestones[milestone].popped = false;
      updatedMilestones[milestone].clicked = false;
    }
    setMilestones(updatedMilestones);
    setBubblesPopped(false);
    setRefreshKey((k) => k + 1); // <-- Add this line
  }

  function checkIfAllPopped() {
    const allPopped = Object.values(milestones)
      .filter((milestone) => milestone.year === visibleYear)
      .every((milestone) => milestone.popped === true);
    setBubblesPopped(allPopped);
  }

  const yearsRef = useRef(null);

  function handleYearsScroll() {
    const yearsContainer = yearsRef.current;
    if (!yearsContainer) return;

    const yearElements = Array.from(yearsContainer.children);
    const scrollTop = yearsContainer.scrollTop;
    const yearHeight = yearElements[0]?.offsetHeight || 1;
    const bufferCount = 1;
    const visibleIndex = Math.round(scrollTop / yearHeight) + bufferCount;
    const yearText = yearElements[visibleIndex]?.textContent;

    if (yearText && !isNaN(Number(yearText))) {
      setVisibleYear(Number(yearText));
    } else {
      setVisibleYear(undefined);
    }

    refreshBubbles();
    displayAll();
    setAnimation(true);
    setNumberOfBubbles(0);
  }

  function scrollUp() {
    if (yearsRef.current) {
      const firstYear = yearsRef.current.querySelector(".year");
      const step = firstYear ? firstYear.offsetHeight : 0;
      yearsRef.current.scrollTop -= step;
    }

    refreshBubbles();
    displayAll();
    setAnimation(true);
    setNumberOfBubbles(0);
  }

  function scrollDown() {
    if (yearsRef.current) {
      const firstYear = yearsRef.current.querySelector(".year");
      const step = firstYear ? firstYear.offsetHeight : 0;
      yearsRef.current.scrollTop += step;
    }
    refreshBubbles();
    displayAll();
    setAnimation(true);
    setNumberOfBubbles(0);
  }

  return (
    <div className="proj-achvmt">
      <h2 className="section-title">Project and Achievements</h2>
      <h4 className="pop-invite">Let's pop some bubbles!🔵💥</h4>

      <div className="year-selection">
        <p className="select-year">Select Year</p>
        <div className="years" ref={yearsRef} onScroll={handleYearsScroll}>
          <div className="year empty-year">Past (No data)</div>
          {sortedYears.map((year) => (
            <div className="year" key={year}>
              {year}
            </div>
          ))}
          <div className="year empty-year">Future (No data Yet)</div>
        </div>
        <div className="navigation-arrows">
          <FontAwesomeIcon
            icon="fa-solid fa-sort-up"
            style={{ color: "#007dff" }}
            onClick={scrollUp}
          />
          <FontAwesomeIcon
            icon="fa-solid fa-sort-down"
            style={{ color: "#007dff" }}
            onClick={scrollDown}
          />
        </div>
      </div>
      <div className="popped-indicator">
        {!bubblesPopped ? numberOfBubbles : "ALL"} BUBBLES POPPED!
      </div>
      <div className="bubbles" ref={bubblesRef}>
        {Object.values(milestones).map((milestone) => (
          <Bubble
            key={milestone.title + refreshKey} // <-- Add refreshKey to key
            milestone={milestone}
            handleClick={handleClick}
            visibleYear={visibleYear}
            animation={animation}
          />
        ))}
      </div>
      {displayDummy && (
        <div className="dummybubbles">
          {dummyBubbles.map((milestone) => (
            <Bubble
              key={milestone.id}
              milestone={milestone}
              isDummy={true}
              animation={animation}
              bubblesParentRef={bubblesRef} // pass the ref
              onDummyOut={(id) =>
                setDummyBubbles((prev) => prev.filter((b) => b.id !== id))
              }
            />
          ))}
        </div>
      )}

      {displayAboutTitle && (
        <AboutTitle
          currentMilestone={currentMilestone}
          displayAll={displayAll}
          setdisplayAboutTitle={setdisplayAboutTitle}
          visibleYear={visibleYear}
          checkIfAllPopped={checkIfAllPopped}
          setAnimation={setAnimation}
          animation={animation}
          setDisplayDummy={setDisplayDummy}
        />
      )}
      {bubblesPopped && !displayAboutTitle && (
        <div className="refresh-bubbles">
          <span className="refresh-text">Refresh Bubbles</span>
          <FontAwesomeIcon
            icon="fa-solid fa-arrows-rotate"
            style={{ color: "#007dff" }}
            onClick={() => {
              refreshBubbles();
              displayAll();
              setAnimation(true);
              setNumberOfBubbles(0);
            }}
          />
        </div>
      )}
    </div>
  );
}
