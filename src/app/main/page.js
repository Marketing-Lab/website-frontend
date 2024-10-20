// Main.js
"use client";

import React from "react";
import MainNavbar from "./MainNavbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";

export default function Main() {
  return (
    <>
      <div className="w-screen">
        <MainNavbar />
      </div>
      <main className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
        <HeroSection />
      </main>
      <FeaturesSection />
    </>
  );
}
