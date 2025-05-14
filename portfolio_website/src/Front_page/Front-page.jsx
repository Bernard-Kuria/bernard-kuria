import "./front-page.css";

import Overview from "./overview-section/Overview.jsx";
import About from "./about-section/About-me.jsx";
import ProjAchvmt from "./Proj-Achievmt-sec/ProjAchvmt.jsx";

export default function FrontPage() {
  return (
    <>
      <Overview />
      <About />
      <div className="border"></div>
      <ProjAchvmt />
    </>
  );
}
