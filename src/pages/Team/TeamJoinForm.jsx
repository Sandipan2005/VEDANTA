/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowUpRight } from "lucide-react";

const TeamJoinForm = () => {


  const practiceAreas = [
    "Civil Litigation",
    "Criminal Law",
    "Corporate / Commercial Law",
    "Family Law",
    "Constitutional / Human Rights Law",
    "Intellectual Property Law",
    "Labour / Service Law",
    "Cyber Crime & IT Law",
    "Property Law / Real Estate",
    "Banking & Finance Law",
    "Tax Law (Direct & Indirect)",
    "Insurance Law",
    "Environmental Law",
    "Arbitration & Alternative Dispute Resolution (ADR)",
    "Consumer Protection Law",
    "Mergers & Acquisitions",
    "Competition / Antitrust Law",
    "Wills, Trusts & Succession Law",
    "Medical Negligence / Healthcare Law",
  ];



  const inputStyle =
    "w-full border border-gray-200 px-4 py-3 bg-transparent text-gray-300 focus:outline-none focus:border-[#a08552] text-sm font-light transition-colors";



  return (

    <section className="w-full bg-[#303030] pb-16 py-1 px-1 md:px-1 mt-0">


      <div className="w-full max-w-250 mx-auto border border-gray-50/50 p-8 md:p-14">


        <form className="space-y-6 md:space-y-8">


          {/* Basic Details */}


          {[
            "FULL NAME (AS PER BAR COUNCIL)",
            "FATHER'S / HUSBAND'S NAME",
            "DATE OF BIRTH",
            "AADHAAR NUMBER",
            "MOBILE NUMBER",
            "EMAIL ADDRESS",
            "BAR COUNCIL ENROLLMENT NUMBER",
            "STATE BAR COUNCIL",
            "EDUCATIONAL QUALIFICATIONS",
            "TOTAL YEARS OF PRACTICE",
          ].map((field)=>(


            <div key={field} className="flex flex-col space-y-2">


              <label className="text-white font-bold uppercase tracking-wider text-[15px]">

                {field}

              </label>


              <input

                type="text"

                placeholder="Enter here"

                className={inputStyle}

              />


            </div>


          ))}






          {/* Residential Address */}


          <div className="flex flex-col space-y-2">


            <label className="text-white font-bold uppercase tracking-wider text-[15px]">

              RESIDENTIAL ADDRESS

            </label>


            <textarea

              rows="4"

              placeholder="Enter address"

              className={inputStyle}

            />


          </div>






          {/* Gender */}


          <div className="flex flex-col space-y-3">


            <label className="text-white font-bold uppercase tracking-wider text-[15px]">

              GENDER

            </label>


            <div className="flex gap-6 text-gray-300">


              <label>
                <input type="checkbox"/> Male
              </label>


              <label>
                <input type="checkbox"/> Female
              </label>


              <label>
                <input type="checkbox"/> Other
              </label>


            </div>


          </div>







          {/* Practice Area */}


          <div className="flex flex-col space-y-3">


            <label className="text-white font-bold uppercase tracking-wider text-[15px]">

              AREAS OF PRACTICE / SPECIALIZATION

            </label>


            <p className="text-gray-300 text-sm">

              Please tick all that apply:

            </p>


            <div className="grid md:grid-cols-2 gap-3 text-gray-300 text-sm">


              {practiceAreas.map((area)=>(


                <label key={area}>

                  <input type="checkbox"/> {area}

                </label>


              ))}


            </div>



            <input

              type="text"

              placeholder="Other (please specify)"

              className={inputStyle}

            />


          </div>







          {/* Declaration */}


          <div className="flex flex-col space-y-2">


            <label className="text-white font-bold uppercase tracking-wider text-[15px]">

              DECLARATION

            </label>


            <p className="text-gray-300 text-sm leading-6">


              I hereby declare that the information provided above is true and correct
              to the best of my knowledge. I understand that any false or misleading
              information may result in rejection of my application.


            </p>


          </div>







          {/* Upload Documents */}


          <div className="flex flex-col space-y-5">


            <label className="text-white font-bold uppercase tracking-wider text-[15px]">

              REQUIRED DOCUMENTS TO SUBMIT

            </label>





            {/* Enrollment Certificate */}


            <div className="flex flex-col space-y-2">


              <label className="text-gray-300 text-sm">

                1. Bar Council Enrollment Certificate

              </label>


              <input

                type="file"

                accept=".pdf,.jpg,.jpeg,.png"

                className="w-full border border-gray-200 px-4 py-3 bg-transparent text-gray-300 text-sm 
                file:bg-[#a08552] file:text-white file:border-0 file:px-5 file:py-2 file:mr-4 cursor-pointer"

              />


            </div>






            {/* Passport Photo */}


            <div className="flex flex-col space-y-2">


              <label className="text-gray-300 text-sm">

                2. Recent Passport Size Photographs

              </label>


              <input

                type="file"

                accept=".jpg,.jpeg,.png"

                className="w-full border border-gray-200 px-4 py-3 bg-transparent text-gray-300 text-sm 
                file:bg-[#a08552] file:text-white file:border-0 file:px-5 file:py-2 file:mr-4 cursor-pointer"

              />


            </div>



          </div>







          {/* Submit Button */}



          <div>


            <button

              type="submit"

              className="bg-[#a08552] text-white px-8 py-2.5 text-sm flex items-center justify-center gap-2 hover:bg-[#8a7246] transition-colors group rounded-xs shadow-sm font-medium tracking-wide"

            >

              Submit


              <span className="bg-white rounded-full p-0.5 ml-1 flex items-center justify-center">


                <ArrowUpRight

                  size={14}

                  strokeWidth={2.5}

                  className="text-[#a08552]"

                />


              </span>


            </button>


          </div>



        </form>


      </div>


    </section>

  );

};


export default TeamJoinForm;