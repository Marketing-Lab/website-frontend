"use client";

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
        <div className="absolute top-0 left-0 w-[50%] h-full flex flex-col justify-center items-start px-12 lg:pl-24 lg:pr-12 bg-blue-500 bg-opacity-50">
          <div className="w-full h-full bg-red-500 bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              CREAMOS
            </h1>
          </div>
        </div>
      </main>
      <FeaturesSection />
    </>
  );
}
