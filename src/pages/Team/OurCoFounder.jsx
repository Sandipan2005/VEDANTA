/* eslint-disable no-unused-vars */
import React from "react";

import CoFounderPhoto from "../../assets/CoFounder.png";
import CoFounder2 from "../../assets/FounderPhoto2.png";
import CoFounder3 from "../../assets/FounderPhoto3.png";
import CoFounder4 from "../../assets/CoFounder4.jpeg";
import CoFounder5 from "../../assets/M K Bose.jpeg";
import CoFounder6 from "../../assets/Cofounder2.jpeg";


const partnersData = [
    { id: 1, name: "D.C. Roy", imageSrc: CoFounder2 },
    { id: 2, name: "J.U. Khadim", imageSrc: CoFounder3 },
    { id: 3, name: "SAIBAL TRIVEDI", imageSrc: CoFounder6 },
    { id: 4, name: "Kuntal Ghosh", imageSrc: CoFounderPhoto },
    { id: 5, name: "Sangita Biswas", imageSrc: CoFounder4 },
    { id: 6, name: "Mrinal Kanti Bose", imageSrc: CoFounder5 },
];


export default function CoFoundersPartnersSection() {

    return (

        <section
            className="bg-[#303030] pt-16 px-4 sm:px-8 md:px-12 xl:px-20 flex flex-col items-center justify-center w-full"
            aria-labelledby="cofounders-partners-heading"
        >


            {/* Header */}

            <div className="text-center mb-12 flex flex-col items-center">


                <h2
                    id="cofounders-partners-heading"
                    className="text-3xl md:text-[48px] font-extrabold tracking-wide text-[#e0e0e0] mb-2 uppercase"
                >
                    Co-founders & Partners
                </h2>


                <div className="w-24 h-1 bg-[#C4A661]"></div>


            </div>




            {/* Responsive Grid */}

            <div
                className="
                w-full 
                max-w-350
                mx-auto 
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-6 
                gap-8
                "
            >


                {partnersData.map((person) => (


                    <article

                        key={person.id}

                        className="
                        flex 
                        flex-col 
                        items-center 
                        w-full 
                        max-w-[220px]
                        mx-auto
                        cursor-pointer
                        "

                    >



                        {/* Image */}

                        <div
                            className="
                            w-full 
                            aspect-[4/5] 
                            bg-[#4a4a4a] 
                            overflow-hidden 
                            border 
                            border-[#666]
                            "
                        >


                            <img

                                src={person.imageSrc}

                                alt={person.name}

                                className="
                                w-full 
                                h-full 
                                object-cover 
                                object-top 
                                filter 
                                brightness-[0.95] 
                                contrast-[1.05]
                                "

                                loading="lazy"

                            />


                        </div>




                        {/* Name */}

                        <div
                            className="
                            w-full 
                            border-t 
                            border-[#C4A661]/50 
                            pt-3 
                            text-center
                            "
                        >


                            <h3
                                className="
                                text-[12px]
                                md:text-[13px]
                                font-serif
                                font-bold
                                text-[#e0e0e0]
                                tracking-[0.15em]
                                uppercase
                                "
                            >

                                {person.name}

                            </h3>


                        </div>



                    </article>


                ))}


            </div>


        </section>

    );

}