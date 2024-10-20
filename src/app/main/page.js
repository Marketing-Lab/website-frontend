// Main.js
"use client";

import React from "react";
import MainNavbar from "./MainNavbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import Images from "./Images";
import MulticolorLine from "./MulticolorLine";
import Features from "./Features"; // Importa el nuevo componente

export default function Main() {
  return (
    <>
      <div className="w-screen">
        <MainNavbar />
      </div>
      <main className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
        <HeroSection />
      </main>
      <MulticolorLine />
      <Images images={[
        "https://i.postimg.cc/sfnPfk2D/i1.jpg",
        "https://i.postimg.cc/3RbCZFBm/b7422e9e8bb1cd04e145a51993365b5f.png",
        "https://i.postimg.cc/3JVgm2ps/i3.png",
        "https://i.postimg.cc/4Nm6YWKv/i4.jpg"
      ]} />
      
      <Features /> {/* Usa el nuevo componente aquí */}
      
      <FeaturesSection />
    </>
  );
}
