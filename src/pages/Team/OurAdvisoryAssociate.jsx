/* eslint-disable no-unused-vars */
import React from "react";
import FounderPhoto from "../../assets/FounderPhoto.png";
import FounderPhoto2 from "../../assets/FounderPhoto2.png";
import FounderPhoto3 from "../../assets/FounderPhoto3.png";

// --- Mock Data ---
const associateData = [
  { id: 1, name: "Name", imageSrc: null, state: "state" },
  { id: 2, name: "Name", imageSrc: null, state: "state" },
  { id: 3, name: "Name", imageSrc: null, state: "state" },
  { id: 4, name: "Name", imageSrc: null, state: "state" },
    { id: 5, name: "Name", imageSrc: null, state: "state" },
    { id: 6, name: "Name", imageSrc: null, state: "state" },

];


// --- Subcomponents ---

const SectionHeader = ({ prefix, highlight }) => (
  <div className="text-center mb-10 flex flex-col items-center">
    <h2 className="text-3xl md:text-[36px] tracking-widest flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
      <span className="font-bold text-[#e0e0e0] uppercase">
        {prefix}
      </span>

      <span className="font-bold text-[#e0e0e0] uppercase relative pb-0">
        {highlight}

        <span className="absolute bottom-0 -left-3 -translate-x-1/2 w-16 h-[3px] bg-[#C4A661] -mb-3"></span>

      </span>
    </h2>
  </div>
);


const TeamMemberCard = ({ name, imageSrc, state }) => (
  <article className="flex flex-col items-center w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] group cursor-pointer">

    {/* Grey Image Box */}
    <div className="w-46 aspect-4.5/5 bg-[#4a4a4a] overflow-hidden mb-4 border border-[#666]">

      {imageSrc && (
        <img
          src={imageSrc}
          className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.05]"
          loading="lazy"
        />
      )}

    </div>


    {/* Name */}
    <div className="w-full border-t border-[#C4A661]/50 pt-3 text-center px-1">

      <h3 className="text-[12px] md:text-[13px] font-serif font-bold text-[#e0e0e0] tracking-[0.15em] uppercase">

        {name}
        <br />
        {state}

      </h3>

    </div>

  </article>
);



// --- Main Component ---

export default function OurAdvisoryAssociate() {

  return (

    <div className="bg-[#303030] min-h-auto py-15 px-4 sm:px-8 md:px-12 xl:px-24">

      <div className="max-w-350 mx-auto flex flex-col gap-24">


        {/* Associate Partner Section */}

        <section aria-labelledby="associate-heading">

          <SectionHeader 
            prefix="Associate" 
            highlight="Partners" 
          />


          <div className="w-full
                max-w-350
                mx-auto
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-6
                gap-8">

            {associateData.map((member) => (

              <TeamMemberCard
                key={`associate-${member.id}`}
                {...member}
              />

            ))}

          </div>


        </section>


      </div>

    </div>

  );

}