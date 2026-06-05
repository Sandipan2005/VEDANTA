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
      <div className="relative z-10 w-full flex items-center justify-center flex-1">

        {/* FULLSCREEN HERO CONTAINER (REMOVED max-width + rounded + shadow) */}
        <div className="relative w-full h-screen overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/image.png")',
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Text Overlay */}
         
        </div>

      </div>
    </div>
  );
};

export default PracticeAreasHero;