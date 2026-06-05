/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";
import HeroBG from "../../assets/HeroHomeBG.png";
import HeroImg from "../../assets/HomeAbout2.png";

const PracticeAreasHero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">

      {/* Dynamic Background Pattern - Diagonal Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Background layer (optional) */}
      </div>

      <Header />

      {/* Main Content Area (REMOVED padding + margins causing borders) */}
      <div className="relative z-10 w-full flex items-center justify-center flex-1">

        {/* FULLSCREEN IMAGE CONTAINER (REMOVED max-width + rounded + shadow + aspect) */}
        <div className="relative w-full h-screen overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("/WhatsApp Image 2026-06-02 at 08.45.01 (1).jpeg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          
        </div>

      </div>
    </div>
  );
};

export default PracticeAreasHero;