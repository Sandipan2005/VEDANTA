/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";

const OurTeamHero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      <Header />

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-205 flex items-center justify-center flex-1">
        
        {/* Image Box (UPDATED TO FULL SCREEN STYLE) */}
        <div className="relative w-full h-205 overflow-hidden">
          
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/WhatsApp Image 2026-06-08 at 16.26.24 (1).jpeg")',
            }}
          />

          

        
        </div>

      </div>
    </div>
  );
};

export default OurTeamHero;