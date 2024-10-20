"use client";

// Main.js
import React, { useEffect, useRef, useState } from "react";
import MainNavbar from "./MainNavbar";
import heroImage from "../../assets/hero.png";
import FeaturesSection from "./FeaturesSection";

export default function Main() {
  const redContainerRef = useRef(null);
  const [fontSizeCREAMOS, setFontSizeCREAMOS] = useState("4xl");
  const [fontSizeTuLoPiensas, setFontSizeTuLoPiensas] = useState("2xl");

  useEffect(() => {
    const updateFontSize = () => {
      if (redContainerRef.current) {
        const containerWidth = redContainerRef.current.offsetWidth;
        const calculatedFontSizeCREAMOS = Math.max(16, containerWidth / 5.5);
        setFontSizeCREAMOS(`${calculatedFontSizeCREAMOS}px`);
        const calculatedFontSizeTuLoPiensas = Math.max(12, containerWidth / 15.4);
        setFontSizeTuLoPiensas(`${calculatedFontSizeTuLoPiensas}px`);
        console.log("Ancho del contenedor rojo:", containerWidth);
      }
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
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
        <div className="absolute top-0 left-0 w-[48%] h-full flex flex-col justify-start items-start px-12 lg:pl-24 lg:pr-12 bg-blue-0 bg-opacity-50">
          <div
            ref={redContainerRef}
            className="w-full h-[85%] bg-red-0 bg-opacity-50 flex flex-col justify-center items-start"
          >
            <h2
              className="text-white font-bold font-poppins leading-none"
              style={{ fontSize: fontSizeTuLoPiensas }}
            >
              TÚ LO PIENSAS NOSOTROS LO
            </h2>
            <h1
              className="text-white font-extrabold font-poppins leading-none"
              style={{ fontSize: fontSizeCREAMOS }}
            >
              CREAMOS
            </h1>
            <p className="text-white font-poppins mt-5 text-base">
              MarketingLAB es una empresa innovadora, especializados en inflables y soportes publicitarios, ofrecemos soluciones creativas y de alto impacto para capturar la atención.
            </p>
            <button className="mt-5 px-6 py-2 text-white font-poppins hover:bg-red-700 transition duration-300 self-start" style={{ borderRadius: "15px", backgroundColor: "#DB182E" }}>
              Contáctanos
            </button>
          </div>
        </div>
      </main>
      <FeaturesSection />
    </>
  );
}
