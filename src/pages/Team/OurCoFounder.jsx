/* eslint-disable no-unused-vars */
import React from "react";

import CoFounderPhoto from "../../assets/CoFounder.png";
import CoFounder2 from "../../assets/FounderPhoto2.png";
import CoFounder3 from "../../assets/FounderPhoto3.png";
import CoFounder4 from "../../assets/CoFounder4.jpeg";
import CoFounder5 from "../../assets/M K Bose.jpeg";
import CoFounder6 from "../../assets/Cofounder2.jpeg";


// Mock data
const partnersData = [
  { id: 1, name: "D.C. Roy", imageSrc: CoFounder2 },
  { id: 2, name: "J.U. Khadim", imageSrc: CoFounder3 },
  { id: 3, name: "Mrinal Kanti Bose", imageSrc: CoFounder6 },
  { id: 4, name: "Kuntal Ghosh", imageSrc: CoFounderPhoto },
  { id: 5, name: "Sangita Biswas", imageSrc: CoFounder4 },
  { id: 6, name: "M K Bose", imageSrc: CoFounder5 },
];


export default function CoFoundersPartnersSection() {

  return (

    <section
      className="bg-[#303030] py-0 px-4 sm:px-8 md:px-12 xl:px-24 flex flex-col items-center justify-center w-full overflow-hidden"
      aria-labelledby="cofounders-partners-heading"
    >


      {/* Header */}

      <div className="text-center mb-16 md:mb-10 flex flex-col items-center">


        <h2
          id="cofounders-partners-heading"
          className="text-3xl md:text-[40px] font-extrabold tracking-wide text-[#e0e0e0] mb-2 uppercase"
        >
          Co-founders & Partners
        </h2>


        {/* Gold underline */}

        <div className="w-24 h-1 bg-[#C4A661]"></div>


      </div>



      {/* Partners - Single Line */}

      <div className="w-full max-w-[1400px] mx-auto flex flex-nowrap justify-center gap-4 sm:gap-6 md:gap-8 overflow-hidden">


        {partnersData.map((person) => (


          <article

            key={person.id}

            className="flex flex-col items-center w-[160px] sm:w-[180px] md:w-[200px] flex-shrink-0 cursor-pointer"

          >


            {/* Grey Image Box */}

            <div className="w-full aspect-[4/5] bg-[#4a4a4a] overflow-hidden mb-0 border border-[#666]">


              <img

                src={person.imageSrc}

                alt={person.name}

                className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.05]"

                loading="lazy"

              />


            </div>



            {/* Name */}

            <div className="w-full border-t border-[#C4A661]/50 pt-3 text-center px-1">


              <h3 className="text-[12px] md:text-[13px] font-serif font-bold text-[#e0e0e0] tracking-[0.15em] uppercase truncate">


                {person.name}


              </h3>


            </div>



          </article>


        ))}


      </div>


    </section>

  );

}