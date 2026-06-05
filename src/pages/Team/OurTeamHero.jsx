/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";

const OurTeamHero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      <Header />

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex items-center justify-center flex-1">
        
        {/* Image Box (UPDATED TO FULL SCREEN STYLE) */}
        <div className="relative w-full h-screen overflow-hidden">
          
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/WhatsApp Image 2026-06-02 at 08.45.01.jpeg")',
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

        
        </div>

      </div>
    </div>
  );
};

export default OurTeamHero;