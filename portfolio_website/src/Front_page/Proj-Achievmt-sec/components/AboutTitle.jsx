import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/about-title.css";
import Bubble from "./Bubble.jsx";

export default function AboutTitle({
  currentMilestone,
  displayAll,
  setdisplayAboutTitle,
  visibleYear,
  checkIfAllPopped,
  setAnimation,
  animation,
  setDisplayDummy,
}) {
  let newCurrent = { ...currentMilestone };
  newCurrent.bubbleSize = "150px";
  newCurrent.fontSize = "1rem";
  newCurrent.display = "block";

  function backToBubbles() {
    currentMilestone.display = "none";
    setdisplayAboutTitle(false);
    displayAll();
    checkIfAllPopped();
    setAnimation(true);
    setDisplayDummy(true);
  }

  return (
    <div className="proj-achvmt-title-container">
      {window.innerWidth > 500 && (
        <Bubble
          milestone={newCurrent}
          visibleYear={visibleYear}
          animation={animation}
        />
      )}

      <div className="proj-achvmt-title">
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          style={{ color: "#007dff" }}
          onClick={backToBubbles}
        />
        <h2 className="title">{currentMilestone.title}</h2>
        <div className="description">{currentMilestone.description}</div>
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  );
}
