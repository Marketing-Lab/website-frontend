// Main.js
import React from "react";
import MainNavbar from "./MainNavbar";
import heroImage from "../../assets/hero.png";
import FeaturesSection from "./FeaturesSection";

export default function Main() {
  return (
    <>
      <div className="w-screen">
        <MainNavbar />
      </div>
      <main
        className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <h1 className="relative z-10 text-4xl font-bold text-white text-center px-4 md:text-6xl lg:text-7xl">
          Bienvenide
        </h1>
      </main>
      <FeaturesSection />
    </>
  );
}
