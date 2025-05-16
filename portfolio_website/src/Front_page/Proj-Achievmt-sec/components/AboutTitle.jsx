import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/about-title.css";
import Bubble from "./Bubble.jsx";

export default function AboutTitle({
  currentMilestone,
  displayAll,
  setdisplayAboutTitle,
}) {
  let newCurrent = { ...currentMilestone };
  newCurrent.bubbleSize = "150px";
  newCurrent.fontSize = "1rem";
  newCurrent.display = "block";

  function backToBubbles() {
    currentMilestone.display = "none";
    setdisplayAboutTitle(false);
    displayAll();
  }

  function handleClick() {}

  return (
    <div className="proj-achvmt-title-container">
      <Bubble milestone={newCurrent} handleClick={handleClick} />
      <div className="proj-achvmt-title">
        <h2 className="title">{currentMilestone.title}</h2>
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          style={{ color: "#007dff" }}
          onClick={backToBubbles}
        />
        <p className="description">{currentMilestone.description}</p>
      </div>
    </div>
  );
}
