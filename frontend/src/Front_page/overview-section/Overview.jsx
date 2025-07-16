import Me from "./components/Me.jsx";
import "./styles/overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <div className="overview-section-border">
        <div className="section-border-1"></div>
        <div className="section-border-1__glow"></div>
        <div className="section-border-2"></div>
        <div className="section-border-2__glow"></div>
      </div>
      <Me />
    </div>
  );
}
