"use client";

// Main.js
import React, { useEffect, useRef, useState } from "react";
import MainNavbar from "./MainNavbar";
import heroImage from "../../assets/hero.png";
import FeaturesSection from "./FeaturesSection";

export default function Main() {
  const redContainerRef = useRef(null);
  const [fontSize, setFontSize] = useState("4xl");

  useEffect(() => {
    const updateFontSize = () => {
      if (redContainerRef.current) {
        const containerWidth = redContainerRef.current.offsetWidth;
        const calculatedFontSize = Math.max(16, containerWidth / 5.5);
        setFontSize(`${calculatedFontSize}px`);
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
        <div className="absolute top-0 left-0 w-[58%] h-full flex flex-col justify-center items-start px-12 lg:pl-24 lg:pr-12 bg-blue-500 bg-opacity-50">
          <div
            ref={redContainerRef}
            className="w-full h-full bg-red-500 bg-opacity-50 flex flex-col justify-center items-center"
          >
            <h1
              className="text-white font-extrabold"
              style={{ fontSize: fontSize }}
            >
              CREAMOS
            </h1>
          </div>
        </div>
      </main>
      <FeaturesSection />
    </>
  );
}
