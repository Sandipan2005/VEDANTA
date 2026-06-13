/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";

const OurTeamHero = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Header />

      <div className="w-full pt-20 sm:pt-15 md:pt-15">
        <div className="w-full overflow-hidden">

          {/* Mobile Image */}
          <img
            src="/WhatsApp Image 2026-06-10 at 15.42.33.jpeg"
            alt="Our Team Mobile"
            className="block lg:hidden w-full md:h-full h-auto object-contain"
          />

          {/* Desktop / Tablet Image */}
          <img
            src="/WhatsApp Image 2026-06-08 at 16.26.24 (1).jpeg"
            alt="Our Team Desktop"
            className="hidden lg:block w-full h-auto object-contain"
          />
 
        </div>
      </div>
    </div>
  );
};

export default OurTeamHero;