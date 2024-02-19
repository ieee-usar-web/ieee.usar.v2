"use client"
import "./NavBar.css";
import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
function Navbar() {
  let followMe = (dets) => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    let cursorX = dets.clientX;
    let cursorY = dets.clientY;
    const centerX = innerWidth / 2;

    if (cursorX < centerX) {
      cursorX = cursorX - (centerX - cursorX) / 5;
    } else if (cursorX > centerX) {
      cursorX = cursorX + (cursorX - centerX) / 5;
    }

    gsap.to("#firstCursor", {
      x: cursorX,
      y: cursorY,
    });
  };
  let scrollEntered = () => {
    gsap.to("#firstCursor", {
      opacity: 1,
    });
  };
  let scrollLeft = () => {
    gsap.to("#firstCursor", {
      opacity: 0,
    });
  };

  const animatedSixth = () => {
    let timeline = gsap.timeline();
    timeline.to("#firstCenterTextContainer .underline", {
      y: 90,
      duration: 0.1,
      opacity: 0,
      delay: 3,
    });
    timeline.to("#firstCenterText span", {
      y: 15 + "vh",
      stagger: 0.1,
      duration: 0.5,
      opacity: 1,
    });
    timeline.to("#firstCenterTextContainer .underline", {
      width: 100 + "%",
      duration: 1.5,
      opacity: 1,
    });
  };
  useLayoutEffect(() => {
    animatedSixth();
  }, []);
  return (
    <>
      <section
        id="firstPage"
        onMouseMove={followMe}
        onMouseLeave={scrollLeft}
        onMouseEnter={scrollEntered}
      >
        <div id="firstCursor">JOIN NOW!!</div>
        <nav id="firstNavigation">
          <span id="firstLeftNavigation">LOGO SPACE</span>
          <div id="firstRightNavigation">
            <div id="firstemptyspace"></div>
            <span>Menu</span>
          </div>
        </nav>
        <video src="./front_bg_video.mp4" autoPlay muted loop></video>
        {/* <video src="./lmao.mp4" autoPlay muted loop></video> */}
        <div id="firstCenterTextContainer">
          <div className="underline"></div>
          <span id="firstCenterText">
            <span>I</span>
            <span>E</span>
            <span>E</span>
            <span>E</span>
            <span> </span>
            <span>&</span>
            <span> </span>
            <span>I</span>
            <span>E</span>
            <span>E</span>
            <span>E</span>
            <span>-</span>
            <span>W</span>
          </span>
        </div>
      </section>
    </>
  );
}
export default Navbar;
