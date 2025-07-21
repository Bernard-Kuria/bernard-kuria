// modules
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import Bubble from "./components/Bubble.jsx";
import AboutTitle from "./components/AboutTitle.jsx";

// assets
import { BubbleSpawner } from "../../hooks/useBubbleEffects.js";
import {
  handleClick,
  displayAll,
  displayNone,
  refreshBubbles,
  checkIfAllPopped,
  handleYearsScroll,
  scrollUp,
  scrollDown,
} from "../../hooks/useBubbleInteractions.js";

// styles
import "./styles/projAchvmt.css";

const dummyMilestone = {
  id: "dummy",
  year: null,
  title: "",
  bubbleSize: 60,
  description: "",
  clicked: false,
  display: "block",
  popped: false,
  isDummy: true,
};

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

  const yearsRef = useRef(null);

  const firstYearElement = yearsRef.current?.querySelector(".year");
  const yearStep = firstYearElement ? firstYearElement.offsetHeight : 0;

  // Dummy bubble spawner
  BubbleSpawner({
    setDummyBubbles,
    dummyMilestone,
    displayDummy,
  });

  return (
    <div className="proj-achvmt">
      <h2 className="section-title">Project and Achievements</h2>
      <h4 className="pop-invite">Let's pop some bubbles!🔵💥</h4>

      <div className="year-selection">
        <p className="select-year">Select Year</p>
        <div
          className="years"
          ref={yearsRef}
          onScroll={() =>
            handleYearsScroll(
              setVisibleYear,
              () =>
                refreshBubbles(
                  milestones,
                  setMilestones,
                  setBubblesPopped,
                  setRefreshKey
                ),
              () => displayAll(milestones, setMilestones),
              setAnimation,
              setNumberOfBubbles,
              yearsRef
            )
          }
        >
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
            onClick={() =>
              scrollUp(
                setVisibleYear,
                () =>
                  refreshBubbles(
                    milestones,
                    setMilestones,
                    setBubblesPopped,
                    setRefreshKey
                  ),
                () => displayAll(milestones, setMilestones),
                setAnimation,
                setNumberOfBubbles,
                yearsRef,
                yearStep
              )
            }
          />
          <FontAwesomeIcon
            icon="fa-solid fa-sort-down"
            style={{ color: "#007dff" }}
            onClick={() =>
              scrollDown(
                setAnimation,
                setNumberOfBubbles,
                () =>
                  refreshBubbles(
                    milestones,
                    setMilestones,
                    setBubblesPopped,
                    setRefreshKey
                  ),
                () => displayAll(milestones, setMilestones),
                yearsRef,
                yearStep
              )
            }
          />
        </div>
      </div>
      <div className="popped-indicator">
        {!bubblesPopped ? numberOfBubbles : "ALL"} BUBBLES POPPED!
      </div>
      <div className="bubbles" ref={bubblesRef}>
        {Object.values(milestones)
          .filter((milestone) => milestone.year === visibleYear)
          .map((milestone) => (
            <Bubble
              key={milestone.title + refreshKey}
              milestone={milestone}
              handleClick={() =>
                handleClick(
                  milestone.title,
                  setMilestones,
                  milestones,
                  setCurrentMilestone,
                  setdisplayAboutTitle,
                  () => displayNone(milestones, setMilestones),
                  setAnimation,
                  setNumberOfBubbles,
                  setDisplayDummy,
                  numberOfBubbles
                )
              }
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
          displayAll={() => displayAll(milestones, setMilestones)}
          setdisplayAboutTitle={setdisplayAboutTitle}
          visibleYear={visibleYear}
          checkIfAllPopped={() =>
            checkIfAllPopped(milestones, setBubblesPopped, visibleYear)
          }
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
              refreshBubbles(
                milestones,
                setMilestones,
                setBubblesPopped,
                setRefreshKey
              );
              displayAll(milestones, setMilestones);
              setAnimation(true);
              setNumberOfBubbles(0);
            }}
          />
        </div>
      )}
    </div>
  );
}
