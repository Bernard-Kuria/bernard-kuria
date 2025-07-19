import Skill from "./components/Skill.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

import "./styles/about.css";

export default function AboutMe() {
  const API = import.meta.env.VITE_FUNCTIONS_URL;
  const [about, setabout] = useState([]);

  // Fetch About Me data from the API
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(`${API}/aboutMe`);
        setabout(res.data);
      } catch (error) {
        console.error("Failed to fetch About Me data", error);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div className="about-me">
      <h2 className="section-title">About Me</h2>
      <div className="skills">
        {about.map((about) => (
          <Skill key={about.aboutTopic} {...about} {...about.aboutDesc} />
        ))}
      </div>
    </div>
  );
}
