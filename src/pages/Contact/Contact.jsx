/* eslint-disable no-unused-vars */
import React from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import Footer from "../../components/layout/Footer";

export default function Contact() {
  return (
    <div className="  text-[#e0e0e0] bg-[#303030] min-h-screen flex flex-col">
      {/* 1. HERO SECTION */}
      <ContactHero />

      {/* 2. CONTACT FORM SECTION */}
      <ContactForm />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
