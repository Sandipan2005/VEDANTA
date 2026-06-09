/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";
import HeroBG from "../../assets/HeroHomeBG.png";

const PracticeAreasHero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      
      {/* Background Pattern (disabled, unchanged) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Optional background layer */}
      </div>

      <Header />

      {/* Main Content Area (REMOVED PADDING + LIMITERS) */}
        <div className="relative w-380 h-[890px] overflow-hidden">
        {/* FULLSCREEN HERO CONTAINER (REMOVED max-width + rounded + shadow) */}
        <div className="relative w-380 h-[890px] overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/WhatsApp Image 2026-06-08 at 16.26.23 (1).jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Dark Overlay */}
          

          {/* Text Overlay */}
         
        </div>

      </div>
    </div>
  );
};

export default PracticeAreasHero;