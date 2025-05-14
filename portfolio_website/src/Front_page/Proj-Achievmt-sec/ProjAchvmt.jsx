import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bubble from "./components/Bubble.jsx";
import AboutTitle from "./components/AboutTitle.jsx";
import "./styles/projAchvmt.css";

const years = [];

const milestones = {
  milestone1: {
    year: 2021,
    title: "Milestone 1",
    bubleSize: "250px",
    description: "Description of milestone 1",
  },
  milestone2: {
    year: 2021,
    title: "Milestone 2",
    bubleSize: "250px",
    description: "Description of milestone 2",
  },
  milestone3: {
    year: 2022,
    title: "Milestone 3",
    bubleSize: "250px",
    description: "Description of milestone 3",
  },
  milestone4: {
    year: 2022,
    title: "Milestone 4",
    bubleSize: "250px",
    description: "Description of milestone 4",
  },
  milestone5: {
    year: 2023,
    title: "Milestone 5",
    bubleSize: "250px",
    description: "Description of milestone 5",
  },
};

export default function ProjAchvmt() {
  Object.values(milestones).map((milestone) => years.push(milestone.year));
  const yearsSet = [...new Set(years)];

  return (
    <div className="proj-achvmt">
      <h2 className="section-title">Project and Achievements</h2>
      <div className="year-selection">
        <p className="select-year">Select Year</p>
        <div className="years">
          {yearsSet.map((year) => (
            <div className="year">{year}</div>
          ))}
        </div>
        <div className="navigation-arrows">
          <FontAwesomeIcon
            icon="fa-solid fa-sort-up"
            style={{ color: "#007dff" }}
          />
          <FontAwesomeIcon
            icon="fa-solid fa-sort-down"
            style={{ color: "#007dff" }}
          />
        </div>
      </div>
      <div className="bubbles">
        {Object.values(milestones).map((milestone) => (
          <Bubble milestone={milestone} />
        ))}
      </div>
      <AboutTitle />
    </div>
  );
}
