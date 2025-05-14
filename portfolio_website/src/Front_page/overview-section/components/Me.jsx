import { useEffect } from "react";
import "../styles/me.css";

export default function Me() {
  useEffect(() => {
    let angleMov = 0; // Initial angle
    const borderOutline = document.querySelector(".border__outline");

    function spinGradient() {
      angleMov += 1; // Increment the angle (adjust speed by changing this value)
      if (borderOutline) {
        borderOutline.style.backgroundImage = `linear-gradient(${angleMov}deg, rgb(0, 125, 255) 10%, rgb(0, 0, 0) 30%, rgb(0, 0, 0) 70%, rgb(0, 125, 255) 90%)`;
      }
      requestAnimationFrame(spinGradient); // Continuously update the angle
    }

    spinGradient(); // Start the spinning animation
  }, []);

  return (
    <div className="me">
      <div className="me__container">
        <div className="border__outline">
          <div className="me__container__image">
            <img src="/Profile.jpg" alt="profile img" />
          </div>
        </div>
        <div className="me__container__text">
          <p className="name">Bernard Kuria</p>
          <p className="title">
            Systems Designer | PCB designer | IoT developer | Web Designer
          </p>
        </div>
      </div>
    </div>
  );
}
