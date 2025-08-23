import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/about-title.css";
import Bubble from "./Bubble.jsx";

import { getMilestoneImgUrl } from "../../../api/services/cloud/cloudData.js";

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
  const [milestoneImgUrl, setMilestoneImgUrl] = useState([]);

  useEffect(() => {
    const imageBlock = currentMilestone.description?.find(
      (desc) => desc.type === "images"
    );

    if (imageBlock && imageBlock.images?.length > 0) {
      getMilestoneImgUrl({
        imageNames: imageBlock.images, // <-- array of image paths
      }).then((urls) => urls && setMilestoneImgUrl(urls));
    }
  }, [currentMilestone]);

  let newCurrent = { ...currentMilestone };
  newCurrent.bubbleSize = 150;
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
        <div className="description">
          {currentMilestone.description?.map((desc, index) => (
            <div key={index}>
              {desc.type === "paragraph" ? (
                <p>{desc.content}</p>
              ) : desc.type === "list" ? (
                <ul>
                  {desc.items?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : desc.type === "images" ? (
                <div className="images">
                  {milestoneImgUrl.length <= 0 ? (
                    <div style={{ color: "blue" }}>loading images...</div>
                  ) : (
                    milestoneImgUrl?.map((url, i) => (
                      <div key={i} className="image">
                        <img src={url} alt={`milestone-${i}`} />
                      </div>
                    ))
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
