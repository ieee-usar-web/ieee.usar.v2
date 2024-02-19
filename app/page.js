"use client";

import { React, useEffect } from "react";
import Loader from "./Components/Loader";
import Navbar from "./Components/NavBar";
import AboutStrivesTo from "./Components/about-strives-to";
import CoreTeam from "./Components/CoreTeam";
import Footer from "./Components/Footer";
function page() {
  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
        });
      } catch (error) {
        console.error("Error loading locomotive-scroll:", error);
      }
    })();
  }, []);
  return (
    <>
      <Loader />
      <Navbar />
      <AboutStrivesTo />
      {/* <br /> */}
      <CoreTeam />
      <Footer/>
    </>
  );
}

export default page;
