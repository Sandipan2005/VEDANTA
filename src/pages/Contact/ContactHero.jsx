/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";
import HeroBG from "../../assets/HeroHomeBG.png";
import HeroImg from "../../assets/HomeOurServicesImg1.png";

const PracticeAreasHero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">

      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Optional background pattern */}
      </div>

      <Header />

      {/* Main Content Area (REMOVED padding + margins causing borders) */}
      <div className="relative z-10 w-full flex items-center justify-center flex-1">

        {/* FULLSCREEN HERO CONTAINER */}
        <div className="relative w-full h-250 overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("/WhatsApp Image 2026-06-08 at 16.26.23.jpeg")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />

          

          
          
        </div>

      </div>
    </div>
  );
};

export default PracticeAreasHero;