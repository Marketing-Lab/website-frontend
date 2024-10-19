"use client";

// Main.js
import React, { useEffect, useRef, useState } from "react";
import MainNavbar from "./MainNavbar";
import heroImage from "../../assets/hero.png";
import FeaturesSection from "./FeaturesSection";

export default function Main() {
  const [headingWidth, setHeadingWidth] = useState("auto");
  const headingRef = useRef(null);
  const mainHeadingRef = useRef(null);

  useEffect(() => {
    if (mainHeadingRef.current) {
      const width = mainHeadingRef.current.offsetWidth;
      setHeadingWidth(width);
    }
  }, []);

  return (
    <>
      <div className="w-screen">
        <MainNavbar />
      </div>
      <main
        className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute top-0 left-0 w-[50%] h-full flex flex-col justify-center items-start pl-20 pr-8 bg-blue-500 bg-opacity-50">
          <div className="w-[90%] h-full bg-red-500 bg-opacity-50 p-8 flex flex-col justify-center items-start">
            <h2
              ref={headingRef}
              className="text-white font-bold sm:text-4xl md:text-5xl lg:text-[min(7vw,4rem)] xl:text-[min(8vw,5rem)] whitespace-nowrap tracking-wide"
              style={{ width: headingWidth }}
            >
              TÚ LO PIENSAS NOSOTROS LO
            </h2>
            <h1
              ref={mainHeadingRef}
              className="text-white text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              style={{ width: "100%", textAlign: "center", letterSpacing: "0.05em" }}
            >
              CREAMOS
            </h1>
            <p className="text-white text-sm mt-4 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              MarketingLAB es una empresa innovadora, especializados en inflables y soportes publicitarios, ofrecemos soluciones creativas y de alto impacto para capturar la atención.
            </p>
            <button className="mt-6 px-6 py-3 bg-red-500 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-red-600">
              Contáctanos
            </button>
          </div>
        </div>
      </main>
      <FeaturesSection />
    </>
  );
}
