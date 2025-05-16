import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bubble from "./components/Bubble.jsx";
import AboutTitle from "./components/AboutTitle.jsx";
import "./styles/projAchvmt.css";

const initialMilestones = {
  milestone1: {
    year: 2023,
    title: "1st Place JKUAT Hackathon",
    bubbleSize: "200px",
    description: "Description of milestone 1",
    clicked: true,
    display: "block",
    popped: false,
  },
  milestone2: {
    year: 2024,
    title: "E-NEXUS Start-up",
    bubbleSize: "250px",
    description: "Description of milestone 2",
    clicked: false,
    display: "block",
    popped: false,
  },
  milestone3: {
    year: 2023,
    title: "3rd place Mt Kenya Hackathon",
    bubbleSize: "200px",
    description: "Description of milestone 3",
    clicked: false,
    display: "block",
    popped: false,
  },
  milestone4: {
    year: 2024,
    title: "AfyaPulse Start-up",
    bubbleSize: "250px",
    description: "Description of milestone 4",
    clicked: false,
    display: "block",
    popped: false,
  },
  milestone5: {
    year: 2023,
    title: "Self-Balancing Robot",
    bubbleSize: "150px",
    description: "Description of milestone 5",
    clicked: false,
    display: "block",
    popped: false,
  },
  milestone6: {
    year: 2024,
    title: "Job at KEDA Ceramics",
    bubbleSize: "200px",
    description: "Description of milestone 6",
    clicked: false,
    display: "block",
    popped: false,
  },
  milestone7: {
    year: 2025,
    title: "Internship at onQ Kenya",
    bubbleSize: "200px",
    description: "Description of milestone 7",
    clicked: false,
    display: "block",
    popped: false,
  },
  milestone8: {
    year: 2025,
    title: "This potrfolio website",
    bubbleSize: "200px",
    description: "Description of milestone 8",
    clicked: false,
    display: "block",
    popped: false,
  },
  milestone9: {
    year: 2024,
    title: "Graduated from Dedan Kimathi University",
    bubbleSize: "200px",
    description: "Description of milestone 9",
    clicked: false,
    display: "block",
    popped: false,
  },
  milestone10: {
    year: 2022,
    title: "Participant at ElectronicWings Competition",
    bubbleSize: "200px",
    description: "Description of milestone 10",
    clicked: false,
    display: "block",
    popped: false,
  },
  milestone11: {
    year: 2023,
    title: "Participant at World Engineering Day Hackathon",
    bubbleSize: "200px",
    description: "Description of milestone 11",
    clicked: false,
    display: "block",
    popped: false,
  },
  milestone12: {
    year: 2021,
    title: "First paid job",
    bubbleSize: "200px",
    description: "Description of milestone 12",
    clicked: false,
    display: "block",
    popped: false,
  },
};

export default function ProjAchvmt() {
  const [milestones, setMilestones] = useState(initialMilestones);
  const [currentMilestone, setCurrentMilestone] = useState(
    Object.values(initialMilestones).find(
      (milestone) => milestone.clicked === true
    )
  );
  const [displayAboutTitle, setdisplayAboutTitle] = useState(false);
  currentMilestone.popped = true;

  const years = Object.values(milestones).map((milestone) => milestone.year);
  const yearsSet = [...new Set(years)];
  const sortedYears = yearsSet.sort((a, b) => a - b);
  const [visibleYear, setVisibleYear] = useState(yearsSet[0]);

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
  }

  function refreshBubbles() {
    const updatedMilestones = { ...milestones };
    for (let milestone in updatedMilestones) {
      updatedMilestones[milestone].popped = false;
    }
    setMilestones(updatedMilestones);
  }

  function checkIfAllPopped() {
    const allPopped = Object.values(milestones).every(
      (milestone) => milestone.popped === true
    );
    return allPopped;
  }

  const yearsRef = useRef(null);

  function handleYearsScroll() {
    const yearsContainer = yearsRef.current;
    if (!yearsContainer) return;

    const yearElements = Array.from(yearsContainer.children);
    const scrollTop = yearsContainer.scrollTop;
    const yearHeight = yearElements[0]?.offsetHeight || 1;
    const bufferCount = 1; // Number of empty-year divs at the top
    const visibleIndex = Math.round(scrollTop / yearHeight) + bufferCount;
    const yearText = yearElements[visibleIndex]?.textContent;

    if (yearText && !isNaN(Number(yearText))) {
      setVisibleYear(Number(yearText));
    } else {
      setVisibleYear(undefined);
    }
  }

  function scrollUp() {
    if (yearsRef.current) {
      const firstYear = yearsRef.current.querySelector(".year");
      const step = firstYear ? firstYear.offsetHeight : 0;
      yearsRef.current.scrollTop -= step;
    }
  }

  function scrollDown() {
    if (yearsRef.current) {
      const firstYear = yearsRef.current.querySelector(".year");
      const step = firstYear ? firstYear.offsetHeight : 0;
      yearsRef.current.scrollTop += step;
    }
  }

  return (
    <div className="proj-achvmt">
      <h2 className="section-title">Project and Achievements</h2>
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
      <div className="bubbles">
        {Object.values(milestones).map((milestone) => (
          <Bubble
            key={milestone.title}
            milestone={milestone}
            handleClick={handleClick}
            visibleYear={visibleYear}
          />
        ))}
      </div>
      {displayAboutTitle ? (
        <AboutTitle
          currentMilestone={currentMilestone}
          displayAll={displayAll}
          setdisplayAboutTitle={setdisplayAboutTitle}
        />
      ) : (
        ""
      )}
      {checkIfAllPopped() && !displayAboutTitle ? (
        <div className="refresh-bubbles">
          <span className="refresh-text">Refresh Bubbles</span>
          <FontAwesomeIcon
            icon="fa-solid fa-arrows-rotate"
            style={{ color: "#007dff" }}
            onClick={() => {
              refreshBubbles();
              displayAll();
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
