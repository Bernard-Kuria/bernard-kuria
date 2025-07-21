export function handleClick(
  newClickedTitle,
  setMilestones,
  milestones,
  setCurrentMilestone,
  setDisplayAboutTitle,
  displayNone,
  setAnimation,
  setNumberOfBubbles,
  setDisplayDummy,
  numberOfBubbles
) {
  setDisplayAboutTitle(true);
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
  setDisplayDummy(false);
}

export function displayAll(milestones, setMilestones) {
  const updatedMilestones = { ...milestones };
  for (let milestone in updatedMilestones) {
    if (updatedMilestones[milestone].popped === false) {
      updatedMilestones[milestone].display = "block";
    }
  }
  setMilestones(updatedMilestones);
}

export function displayNone(updatedMilestones, setMilestones) {
  const newMilestones = { ...updatedMilestones };
  for (let milestone in newMilestones) {
    newMilestones[milestone].display = "none";
  }
  setMilestones(newMilestones);
}

export function refreshBubbles(
  milestones,
  setMilestones,
  setBubblesPopped,
  setRefreshKey
) {
  const updatedMilestones = { ...milestones };
  for (let milestone in updatedMilestones) {
    updatedMilestones[milestone].popped = false;
    updatedMilestones[milestone].clicked = false;
  }
  setMilestones(updatedMilestones);
  setBubblesPopped(false);
  setRefreshKey((k) => k + 1);
}

export function checkIfAllPopped(milestones, setBubblesPopped, visibleYear) {
  const allPopped = Object.values(milestones)
    .filter((milestone) => milestone.year === visibleYear)
    .every((milestone) => milestone.popped === true);
  setBubblesPopped(allPopped);
}

export function handleYearsScroll(
  setVisibleYear,
  refreshBubbles,
  displayAll,
  setAnimation,
  setNumberOfBubbles,
  yearsRef
) {
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

export function scrollUp(
  setVisibleYear,
  refreshBubbles,
  displayAll,
  setAnimation,
  setNumberOfBubbles,
  yearsRef,
  yearStep
) {
  if (yearsRef.current) {
    yearsRef.current.scrollTop -= yearStep;
  }
  refreshBubbles();
  displayAll();
  setAnimation(true);
  setNumberOfBubbles(0);
}

export function scrollDown(
  setAnimation,
  setNumberOfBubbles,
  refreshBubbles,
  displayAll,
  yearsRef,
  yearStep
) {
  if (yearsRef.current) {
    yearsRef.current.scrollTop += yearStep;
  }
  refreshBubbles();
  displayAll();
  setAnimation(true);
  setNumberOfBubbles(0);
}
