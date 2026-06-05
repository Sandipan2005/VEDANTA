/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/layout/ScrollToTop";
import Home from "../pages/Home/Home";
import PracticeAreas from "../pages/PracticeAreas/PracticeAreas";
import Team from "../pages/Team/Team";
import TeamJoinPage from "../pages/Team/TeamJoinPage";
import Contact from "../pages/Contact/Contact";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/team" element={<Team />} />
        <Route path="/join-our-team" element={<TeamJoinPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* We will add Contact route here later */}
      </Routes>
    </BrowserRouter>
  );
}
