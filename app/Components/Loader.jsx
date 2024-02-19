"use client"
import React, { useEffect, useRef } from "react";
import "./Loader.css";
import gsap from "gsap";
function Loader() {
  const starBg = useRef(null);
  const loaderAnimation = () => {
    let timeline = gsap.timeline();
    timeline.to(
      ".hover-text",
      {
        width: 110 + "%",
        duration: 1.5,
        ease: "power1.inOut",
      },
      0
    );
    timeline.to(
      ".title",
      {
        x: -5 + "vw",
        duration: 0.6,
        opacity: 0,
        stagger: 2,
      },
      2
    );
    timeline.to(
      ".papaDiv",
      {
        y: -10 + "vh",
        duration: 1,
        opacity: 0,
        stagger: 2,
        display: "none",
      },
      3
    );
  };

  useEffect(() => {
    const starBackground = starBg.current;
    function createStars() {
      const numStars = 300;

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        star.style.animationDelay = `${Math.random() * 1}s`;
        starBackground.appendChild(star);
      }
    }
    createStars();
    loaderAnimation();
  }, []);
  return (
    <>
      <div className="papaDiv">
        <div ref={starBg} className="star-background"></div>
        <div className="title">
          <button data-text="Awesome" className="button">
            <span className="actual-text">&nbsp;IEEE &amp; IEEE-W&nbsp;</span>
            <span className="hover-text">&nbsp;IEEE &amp; IEEE-W&nbsp;</span>
          </button>
        </div>
        <div class="bar">
          <div class="circle"></div>
          <p id="loading">Loading</p>
        </div>
      </div>
    </>
  );
}
export default Loader;
