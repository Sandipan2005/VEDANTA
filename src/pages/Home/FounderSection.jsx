/* eslint-disable no-unused-vars */
import React from "react";
import FounderPhoto from "../../assets/FounderPhoto.png";
import Signature from "../../assets/FounderSign.png";

const FounderSection = () => {
    return (
        <section
            className="relative min-h-screen w-full overflow-hidden py-16 md:pt-24 md:pb-10 px-5 sm:px-8 md:px-12 xl:px-24 flex flex-col items-center justify-start bg-white"
        >

            {/* Background */}
            <div className="absolute inset-0 bg-white pointer-events-none"></div>


            {/* --- HERO / TOP SECTION --- */}
            <header className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-20 mb-20 md:mb-38 space-y-10">

                {/* Logo */}
                <div
                    className="flex items-center justify-center w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-white rounded-full mb-6"
                >
                    <img
                        src="/favicon.svg"
                        alt="Vedanta Legal Associates Logo"
                        className="w-full h-full object-contain"
                    />
                </div>


                {/* Firm Name */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wide text-black drop-shadow-lg lg:whitespace-nowrap">
                    Vedanta Legal Associates
                </h1>


                {/* Tagline */}
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium italic text-black tracking-wide max-w-4xl drop-shadow-md lg:whitespace-nowrap relative lg:-left-20">
                    “Committed to Diligent and Time Bound Resolution of Matters”
                </p>

            </header>





            {/* --- FOUNDER SECTION --- */}
            <article
                className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 pt-10 pl-10 pr-10"
            >


                {/* Left Column */}
                <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-start xl:pl-4">


                    <div className="relative inline-block">


                        {/* Gold Corner Design */}
                        <div
                            className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-[#C4A661]"
                        ></div>


                        <div
                            className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-[#C4A661]"
                        ></div>




                        {/* Founder Photo */}
                        <div
                            className="relative z-10 w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[480px] rounded-[40px] overflow-hidden bg-cover bg-center border border-black/10"
                            style={{
                                backgroundImage: `url(${FounderPhoto})`,
                            }}
                            role="img"
                            aria-label="Portrait of Founder B.S. Sarkar"
                        ></div>


                    </div>





                    {/* Signature */}
                    <div
                        className="mt-8 text-center lg:text-left pt-2 pb-6 w-full flex flex-col items-center lg:items-start"
                    >

                        <img
                            src={Signature}
                            alt="B.S. Sarkar Signature"
                            className="w-32 sm:w-40 md:w-48 brightness-0"
                        />


                        <div
                            className="w-12 md:w-48 h-0.5 md:h-[3px] bg-[#C4A661] my-4"
                        ></div>


                    </div>


                </div>







                {/* Right Column */}
                <div className="w-full lg:w-8/12 flex flex-col justify-center lg:pl-8 xl:pl-12">


                    <h2
                        className="text-[28px] sm:text-[34px] md:text-[40px] font-bold tracking-[0.03em] mb-4 uppercase text-black leading-tight lg:text-center"
                    >
                        Founder's Desk
                    </h2>



                    {/* Gold Line */}
                    <div
                        className="w-12 md:w-16 h-0.5 md:h-[3px] bg-[#C4A661] mb-8 md:mb-10 lg:mx-auto"
                    ></div>





                    {/* Founder Text */}
                    <div
                        className="space-y-4 md:space-y-5 text-black text-[13px] sm:text-[14px] md:text-[20px] leading-[1.4] tracking-[0.015em] font-light md:pr-10 xl:pr-16 mb-8 text-justify lg:text-center"
                    >

                        <p>
                            As the Founder of Vedanta Legal Associates, I, Shri Bijoy Sarkar,
                            have practiced for almost 50 years before the High Courts across
                            India, the Supreme Court of India, various District Courts,
                            Sessions Courts, and Tribunals.
                        </p>


                        <p>
                            It is with great pride and humility that I reflect on nearly five
                            decades of dedicated service to the noble profession of law.
                        </p>


                        <p>
                            The formation of Vedanta Legal Associates stems from my sincere
                            desire to share my knowledge and extensive experience with the new
                            generation of junior lawyers, associates, and those who tirelessly
                            fight for justice on behalf of the suffering members of society.
                            This initiative is also driven by my strong belief in spreading
                            legal awareness so that every citizen knows and understands their
                            constitutional rights.
                        </p>


                        <p>
                            This firm stands as a living testament to that vision — rooted in
                            ethics, excellence, and an unwavering commitment to truth and
                            justice.
                        </p>


                    </div>


                </div>


            </article>


        </section>
    );
};


export default FounderSection;