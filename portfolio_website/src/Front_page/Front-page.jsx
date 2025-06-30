import "./front-page.css";

import Overview from "./overview-section/Overview.jsx";
import About from "./about-section/About-me.jsx";
import ProjAchvmt from "./Proj-Achievmt-sec/ProjAchvmt.jsx";

export default function FrontPage({ AboutMe, initialMilestones }) {
  return (
    <>
      <Overview />
      <About AboutMe={AboutMe} />
      <div className="border"></div>
      <ProjAchvmt initialMilestones={initialMilestones} />
      <div className="border"></div>
    </>
  );
}
