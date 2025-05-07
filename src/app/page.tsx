"use client";

import { useState } from "react";
import HeroSection from "./components/Hero";
import StatsSection from "./components/Stats";
import FeatureSection from "./components/Feature";
import HowItWorksSection from "./components/HowItWorks";
import AboutSection from "./components/About";
import CallToActionSection from "./components/CallToAction";
import ProjectsSection from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-black">
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <HowItWorksSection />
      <ProjectsSection />
      <AboutSection />
      <CallToActionSection />
    </div>
  );
}