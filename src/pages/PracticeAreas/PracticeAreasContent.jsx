/* eslint-disable no-unused-vars */
import React from "react";

const CheckIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-black"
    >
        <circle cx="12" cy="12" r="10" fill="currentColor"/>
        <path
            d="M8 12.5L11 15.5L16 9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const PracticeAreaCard = ({
                              number,
                              title,
                              listCol1,
                              listCol2,
                              paragraphs,
                          }) => {
    return (
        <div className="relative w-full mx-auto mb-10 md:mb-10 px-4 md:px-8">
            {/* Background Number */}
            {/*<div*/}
            {/*  className="absolute z-0   font-black select-none pointer-events-none"*/}
            {/*  style={{*/}
            {/*    top: "-0.7em",*/}
            {/*    left: "-0.1em",*/}
            {/*    fontSize: "clamp(8rem, 15vw, 10rem)",*/}
            {/*    lineHeight: "0.8",*/}
            {/*    background:*/}
            {/*      "linear-gradient(180deg, #9D7C36 0%, rgba(229, 216, 184, 0.3) 90%, rgba(255, 255, 255, 0) 100%)",*/}
            {/*    WebkitBackgroundClip: "text",*/}
            {/*    WebkitTextFillColor: "transparent",*/}
            {/*    letterSpacing: "-0.05em",*/}
            {/*  }}*/}
            {/*>*/}
            {/*    {number}*/}
            {/*</div>*/}

            {/* Card Content */}
            <div
                className="relative z-10 bg-white p-8 md:p-12 lg:pt-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-sm border border-gray-50 flex flex-col gap-6">
                <h3
                    className="text-2xl md:text-3xl text-center font-bold relative inline-block mx-auto mb-6  rounded-sm p-2"
                    // style={{ textShadow: "0px 4px 30px #303030 " }}

                >
                    {/*0px 2px 5px #303030,*/}
                    {title}
                    <div className="absolute left-1/4 right-1/4 h-0.5 bg-[#c4a661] -bottom-3"></div>
                </h3>

                {(listCol1 || listCol2) && (
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-32 lg:gap-x-90 gap-y-6 mb-8 max-w-4xl mx-auto w-full md:px-8">
                        {listCol1 && (
                            <ul className="space-y-4 w-full">
                                {listCol1.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-gray-800 font-medium"
                                    >
                                        <div className="mt-1">
                                            <CheckIcon/>
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {listCol2 && (
                            <ul className="space-y-4 w-full">
                                {listCol2.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-gray-800 font-medium"
                                    >
                                        <div className="mt-1">
                                            <CheckIcon/>
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                <div className="space-y-0 text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                    {paragraphs.map((para, idx) => (
                        <p key={idx}>{para}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const PracticeAreasContent = () => {
    return (
        <section className="py-16 md:py-10 px-4 md:px-8 bg-white relative overflow-hidden">
            {/* Title Section */}
            <div className="text-center mb-10 md:mb-10">
                <p className="text-gray-600 mb-4 tracking-wide">
                    How Can We Help You ?
                </p>
                <h2 className="text-3xl md:text-5xl  text-[#303030] font-bold uppercase tracking-wider mb-6">
                    What can we <span className="text-[#303030]">help you</span> with
                </h2>
                <div className="w-20 md:w-32 h-0.5 bg-[#c4a661] mx-auto"></div>
            </div>

            {/* Cards Container */}
            <div className="w-full px-2 lg:px-8 mx-auto space-y-8">
                {/* Area 1 */}
                <PracticeAreaCard
                    number="01"
                    title="Civil Litigation & Dispute Resolution"
                    listCol1={[
                        "Money recovery suits and summary suits",
                        "Breach of contract cases",
                        "Specific performance suits",
                        "Injunction matters",
                        "Declaration suits",
                    ]}
                    listCol2={[
                        "Civil appeals and revisions",
                        "Partition suits",
                        "Filing and defending caveats",
                        "All other civil litigation matters",
                    ]}
                    paragraphs={[
                        "The firm handles civil litigation and dispute resolution matters before the District Courts, the High Court of Meghalaya, and other appropriate forums. This practice area covers a wide range of civil disputes involving individuals, companies, banks, financial institutions, government entities, and other organizations. It includes filing and defending suits for recovery of money, breach of contract, specific performance of agreements, temporary and permanent injunctions, declarations regarding legal rights, partition of property, filing and defending caveats, as well as civil appeals and revisions.",
                        "Civil litigation proceedings are governed primarily by the Code of Civil Procedure, 1908, along with various substantive laws depending on the nature of the dispute. The process typically involves drafting plaints or written statements, filing interim applications for injunctions or attachments, recording of evidence, arguments, and pronouncement of judgment. Appeals and revisions may be filed against orders or decrees before higher courts. The firm provides assistance in drafting pleadings, filing of applications, preparation of evidence, and representation in civil proceedings in accordance with the Code of Civil Procedure and other relevant laws. Matters in this area often require detailed examination of documents, contractual terms, and limitation periods to protect the legal rights of the parties involved.",
                    ]}
                />

                {/* Area 2 */}
                <PracticeAreaCard
                    number="02"
                    title="Criminal Litigation & Defense"
                    listCol1={[
                        "Anticipatory and regular bail applications",
                        "Quashing of FIR under Section 482 CrPC",
                        "Trial representation in Sessions and Magistrate Courts",
                    ]}
                    listCol2={[
                        "Appeals in High Court and Supreme Court",
                        "Economic offences and white-collar crimes",
                        "NDPS, POCSO, and other special cases",
                    ]}
                    paragraphs={[
                        "The firm handles criminal litigation and defense matters before the Magistrate Courts, Sessions Courts, the High Court of Meghalaya, and the Supreme Court of India. This practice area covers representation in criminal proceedings at various stages, including anticipatory and regular bail applications, petitions for quashing of FIR under Section 482 of the Code of Criminal Procedure, trial representation, and appeals. It includes cases involving economic offences, white-collar crimes, and matters under special statutes such as the NDPS Act and POCSO Act.",
                        "Criminal proceedings generally begin with registration of FIR or complaint, followed by investigation, charge sheet or final report, framing of charges, recording of evidence, and final arguments. Bail applications are filed under relevant provisions depending on the nature and seriousness of the offence. Quashing petitions are preferred before the High Court when FIRs are alleged to be frivolous or an abuse of process. Appeals lie before higher courts against conviction or acquittal orders. The firm provides assistance in filing applications, representation during trials and hearings, and preparation of appeals in accordance with the Code of Criminal Procedure and other relevant laws. Each case requires careful analysis of evidence, procedural compliance, and applicable penal provisions.",
                    ]}
                />

                {/* Area 3 */}
                <PracticeAreaCard
                    number="03"
                    title="Consumer Protection Law"
                    paragraphs={[
                        "Consumer Protection Law: The firm handles matters relating to Consumer Protection Law before the Consumer Disputes Redressal Forums and Commissions at district, state, and national levels.",
                        "This practice area covers filing and defending consumer complaints and disputes between consumers and service providers or manufacturers. It includes issues relating to defective goods, deficient services, unfair trade practices, misleading advertisements, and product liability.",
                        "Consumer disputes are governed by the Consumer Protection Act, 2019. Complaints can be filed for compensation, replacement, or refund depending on the nature of deficiency. Forums have pecuniary jurisdiction based on the value of goods or services. Proceedings involve filing of complaints, replies, evidence, and arguments. Appeals lie before higher commissions. The firm provides assistance in drafting complaints, representation before consumer forums, and handling of appeals under the Consumer Protection Act and related rules.",
                    ]}
                />
                {/* Area 4 */}
                <PracticeAreaCard
                    number="04"
                    title="Real Estate & Property Law"
                    listCol1={[
                        "Title verification and due diligence",
                        "Sale deeds, gift deeds, and lease agreements",
                        "Landlord-tenant disputes",
                        "Land acquisition and revenue matters",
                        "All other real estate and property law matters",

                    ]}
                    listCol2={[
                        "Inheritance and succession-related property issues",
                        "Customary land rights under Khasi, Garo, and Jaintia laws",
                        "Registration and documentation of property transactions",
                        "Eviction proceedings",
                        "Property partition matters",
                    ]}
                    paragraphs={[
                        "This practice area relates to real estate and property law matters before civil courts, revenue authorities, registration offices, the High Court and other appropriate forums. Property matters may involve ownership, possession, transfer, inheritance, tenancy, boundaries, registration, or land revenue issues.\n" +
                        "The work may include title verification, due diligence, drafting and review of sale deeds, gift deeds, lease agreements, landlord-tenant disputes, eviction proceedings, partition, inheritance, customary land rights, registration, documentation, land acquisition, mutation, and revenue matters.\n" +
                        "Property transactions generally require examination of title documents, chain of ownership, revenue records, mutation entries, encumbrances, possession records, succession documents, and applicable local laws.  property matters may also involve customary practices and land rights relating to Khasi, Garo, and Jaintia communities.\n" +
                        "Disputes may arise from unclear title, competing inheritance claims, illegal possession, boundary disputes, refusal to execute documents, breach of sale agreement, tenancy disputes, or acquisition proceedings. Such matters may require legal notices, suits for declaration, injunctions, partition proceedings, eviction cases, or representation before revenue authorities.\n" +
                        "Registration and documentation require compliance with applicable stamp duty, registration procedure, identification of parties, description of property, and execution requirements.\n"
                    ]}
                />

                <PracticeAreaCard
                    number="04"
                    title="Family & Matrimonial Law"
                    listCol1={[
                        "Mutual consent divorce",
                        "Contested divorce proceedings",
                        "Child custody matters",
                        "Visitation rights",
                        "All other family and matrimonial law matters",
                    ]}
                    listCol2={[
                        "Maintenance and alimony cases",
                        "Domestic violence cases",
                        "Wills, trusts, and succession matters",
                        "Muslim law matters",
                        "Adoption and guardianship proceedings",
                    ]}
                    paragraphs={[
                        "This practice area covers family and matrimonial law matters before District Courts, Family Courts, the High Court and other appropriate forums. Family matters may involve marriage, divorce, custody, maintenance, domestic violence, guardianship, adoption, succession, wills, trusts, and personal law issues.",
                        "The work may include mutual consent divorce, contested divorce, child custody, visitation rights, maintenance, alimony, domestic violence proceedings, succession matters, Muslim law matters, adoption, guardianship, and preparation of family settlement documents.Matrimonial proceedings may be governed by applicable personal laws and secular statutes depending on the parties and nature of the dispute.Divorce proceedings may involve grounds such as cruelty, desertion, mutual consent, or other legally recognised grounds.Mutual consent divorce generally requires settlement terms and compliance with statutory procedure.",
                        "Child custody and visitation matters are considered with reference to the welfare of the child. Maintenance and alimony claims may involve assessment of income, expenses, dependency, standard of living, and legal entitlement. Domestic violence proceedings may involve protection orders, residence orders, monetary relief, custody orders, or compensation.",
                        "Succession and will matters may require compliance with the Indian Succession Act, personal laws, or applicable customary practices. Adoption and guardianship proceedings may require documents, consent, verification, and court approval where applicable.",
                        ]}
                />

            </div>
        </section>
    );
};

export default PracticeAreasContent;
