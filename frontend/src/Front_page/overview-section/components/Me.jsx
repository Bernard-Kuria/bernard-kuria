import { useEffect, useState } from "react";
import "../styles/me.css";

import { getProfileImgUrl } from "../../../../api/services/cloud/cloudData.js";
import { fetchImages } from "../../../../api/services/firestore/imagesApi.js";

export default function Me() {
  const [profileImgUrl, setProfileImgUrl] = useState();

  // Fetch the profile image URL and images from Firestore
  useEffect(() => {
    getProfileImgUrl().then((url) => url && setProfileImgUrl(url));
    fetchImages().then((images) => console.log("Images:", images));
  }, []);

  // Animation for the border glow
  useEffect(() => {
    const slideborderglow = () => {
      const slideSpeed = 50;
      const borderGlow1 = document.querySelector(".section-border-1__glow");
      const borderGlow2 = document.querySelector(".section-border-2__glow");

      const startAnimation = () => {
        // First animation: Fade in
        const movement1 = borderGlow1.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          {
            duration: 500, // Fade-in duration
            fill: "forwards",
          }
        );

        const movement2 = borderGlow2.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          {
            duration: 500,
            fill: "forwards",
          }
        );

        // Second animation: Movement
        movement1.onfinish = () => {
          const move1 = borderGlow1.animate(
            [{ transform: `translateX(calc(75vw - 45px))` }],
            {
              duration: slideSpeed * 100,
              fill: "backwards",
            }
          );

          move1.onfinish = () => {
            startAnimation();
          };
        };

        movement2.onfinish = () => {
          borderGlow2.animate(
            [{ transform: `translateX(calc(-72vw + 45px))` }],
            {
              duration: slideSpeed * 100,
              fill: "backwards",
            }
          );
        };
      };

      // Start the animation sequence
      startAnimation();
    };

    slideborderglow();
  }, []);

  // Gradient spin effect for the border outline
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
              <img src={profileImgUrl} alt="profile img" />
            </div>
            <div className="me__reflected">
              <div className="outline__reflected">
                <div className="me__container__image">
                  <img src={profileImgUrl} alt="profile img" />
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
