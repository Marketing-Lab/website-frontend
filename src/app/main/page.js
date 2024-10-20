"use client";

// Main.js
import React, { useLayoutEffect, useRef, useState } from "react";
import MainNavbar from "./MainNavbar";
import heroImage from "../../assets/hero.png";
import FeaturesSection from "./FeaturesSection";
import debounce from "lodash.debounce";

export default function Main() {
  const redContainerRef = useRef(null);
  const [fontSizeCREAMOS, setFontSizeCREAMOS] = useState(null);
  const [fontSizeTuLoPiensas, setFontSizeTuLoPiensas] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const calculateFontSizes = () => {
    if (!redContainerRef.current) {
      return { creamos: "16px", tuLoPiensas: "12px" };
    }

    const containerWidth = redContainerRef.current.offsetWidth;

    const calculatedFontSizeCREAMOS = Math.min(
      Math.max(16, containerWidth / 5.5),
      200
    );

    const calculatedFontSizeTuLoPiensas = Math.min(
      Math.max(12, containerWidth / 15.4),
      200
    );

    return {
      creamos: `${calculatedFontSizeCREAMOS}px`,
      tuLoPiensas: `${calculatedFontSizeTuLoPiensas}px`,
    };
  };

  useLayoutEffect(() => {
    const updateFontSize = () => {
      const newFontSizes = calculateFontSizes();
      setFontSizeCREAMOS(newFontSizes.creamos);
      setFontSizeTuLoPiensas(newFontSizes.tuLoPiensas);
      setIsReady(true);
      console.log("Ancho del contenedor rojo:", redContainerRef.current?.offsetWidth);
    };

    const debouncedUpdate = debounce(updateFontSize, 100);

    updateFontSize();
    window.addEventListener("resize", debouncedUpdate);

    return () => {
      window.removeEventListener("resize", debouncedUpdate);
      debouncedUpdate.cancel();
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
        <div
          className={`absolute top-0 left-0 w-[48%] h-full flex flex-col justify-start items-start px-12 lg:pl-24 lg:pr-12 bg-blue-0 bg-opacity-50 transition-opacity duration-300 ease-in-out ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={redContainerRef}
            className="w-full h-[85%] bg-red-0 bg-opacity-50 flex flex-col justify-center items-start"
          >
            {fontSizeTuLoPiensas && fontSizeCREAMOS && (
              <>
                <h2
                  className="text-white font-bold font-poppins leading-none transition-[font-size] duration-300 ease-in-out single-line-text"
                  style={{ fontSize: fontSizeTuLoPiensas }}
                >
                  TÚ LO PIENSAS NOSOTROS LO
                </h2>

                <h1
                  className="text-white font-extrabold font-poppins leading-none transition-[font-size] duration-300 ease-in-out"
                  style={{ fontSize: fontSizeCREAMOS }}
                >
                  CREAMOS
                </h1>
                <p className="description text-white font-poppins mt-5 text-base">
                  MarketingLAB es una empresa innovadora, especializada en inflables y soportes publicitarios, ofrecemos soluciones creativas y de alto impacto para capturar la atención.
                </p>
                <button
                  className="mt-5 px-6 py-2 text-white font-poppins hover:bg-red-700 transition-colors duration-300 self-start"
                  style={{ borderRadius: "15px", backgroundColor: "#DB182E" }}
                >
                  Contáctanos
                </button>
              </>
            )}
          </div>
        </div>
      </main>
      <FeaturesSection />
    </>
  );
}
