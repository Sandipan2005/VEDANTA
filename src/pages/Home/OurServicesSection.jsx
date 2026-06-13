/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


const practiceAreas = [
  { name: "Civil Litigation & Dispute Resolution", img: "/WhatsApp Image 2026-06-01 at 9.12.53 PM.jpeg" },
  { name: "Criminal Litigation & Defense", img: "/WhatsApp Image 2026-06-01 at 9.12.53 PM (1).jpeg" },
  { name: "Real Estate & Property", img: "/WhatsApp Image 2026-06-01 at 9.12.53 PM (2).jpeg" },
  { name: "Family & Matrimonial", img: "/WhatsApp Image 2026-06-01 at 9.12.54 PM.jpeg" },
  { name: "Corporate & Commercial", img: "/WhatsApp Image 2026-06-01 at 9.12.54 PM (1).jpeg" },
  { name: "Cyber Crime & Technology", img: "/WhatsApp Image 2026-06-01 at 9.12.54 PM (2).jpeg" },
  { name: "Consumer Protection", img: "/WhatsApp Image 2026-06-01 at 9.12.55 PM.jpeg" },
  { name: "Service & Employment", img: "/WhatsApp Image 2026-06-01 at 9.12.55 PM (1).jpeg" },
  { name: "Taxation", img: "/WhatsApp Image 2026-06-01 at 9.12.55 PM (2).jpeg" },
];


const OurServicesSection = () => {


  return (

    <section
      className="relative w-full bg-[#303030] py-16 md:pt-15 md:pb-5 px-5 sm:px-8 md:px-12 xl:px-24"
      aria-labelledby="services-heading"
    >


      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-16">



        <div className="w-full flex flex-col items-center lg:items-center px-0 md:px-4">


          <div className="relative inline-block text-center">


            <h2
              id="services-heading"
              className="text-3xl md:text-5xl font-extrabold tracking-wide text-[#e0e0e0] mb-6 text-center lg:text-left uppercase"
            >
              Practice Areas
            </h2>


            <div className="w-24 h-1 bg-[#a08552] absolute bottom-0 left-1/2 -translate-x-1/2 mb-1"></div>


          </div>



          <p className="text-[#e0e0e0] text-[15px] md:text-[22px] leading-[1.8] font-light text-center lg:text-left mb-0 max-w-full mt-10">

            Vedanta Legal Associates assists a wide spectrum of clients,
            including traditional organisations and modern enterprises. We offer
            legal services across multiple sectors through our focused practice areas.

          </p>



        </div>




        <div className="w-full">


          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 m-0 p-0 list-none">


            {practiceAreas.map((area, index) => (


              <li key={index}>


                <Link
                  to="/practice-areas"
                  className="flex items-center text-white text-[14px] md:text-[18px] lg:text-[20px] font-bold tracking-wide transition-colors hover:bg-gray-50 hover:text-[#a08552] shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-gray-200 px-5 py-4 rounded-xl w-full h-full no-underline"
                >



                  <img
                    src={area.img}
                    alt={area.name}
                    className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full mr-4 shrink-0 border border-gray-200"
                  />



                  <span className="whitespace-normal">
                    {area.name}
                  </span>



                </Link>



              </li>



            ))}



          </ul>



        </div>



      </div>



    </section>

  );

};


export default OurServicesSection;