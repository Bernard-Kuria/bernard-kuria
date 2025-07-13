import { useEffect } from "react";
import "../styles/me.css";

export default function Me() {
  useEffect(() => {
    let angleMov = 0;
    const borderOutline = document.querySelector(".border__outline");

    function spinGradient() {
      angleMov += 1;
      if (borderOutline) {
        borderOutline.style.backgroundImage = `linear-gradient(${angleMov}deg, rgb(0, 125, 255) 10%, rgb(0, 0, 0) 30%, rgb(0, 0, 0) 70%, rgb(0, 125, 255) 90%)`;
      }
      requestAnimationFrame(spinGradient);
    }

    spinGradient();
  }, []);

  return (
    <div className="me">
      <div className="me__container">
        <div className="image__positioning">
          <div className="border__outline">
            <div className="me__container__image">
              <img src="/Profile.jpg" alt="profile img" />
            </div>
            <div className="me__reflected">
              <div className="outline__reflected">
                <div className="me__container__image">
                  <img src="/Profile.jpg" alt="profile img" />
                </div>
              </div>
            </div>
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
