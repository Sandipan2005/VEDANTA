/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import TeamJoinForm from './TeamJoinForm';
export default function TeamJoinPage() {
  return (
    <div className="bg-[#303030] min-h-screen pt-24 md:pt-32 flex flex-col">
      <div className="bg-black">
        <Header />
      </div>
      <div className="max-w-7xl mx-auto py-12 px-6 flex-grow">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-[#e0e0e0]">Join Our Team</h1>
          <p className="text-[#e0e0e0] max-w-2xl mx-auto">We are always looking for talented individuals to join our growing firm. Please fill out the form below.</p>
        </div>
        <TeamJoinForm />
      </div>
      <Footer />
    </div>
  );
}
