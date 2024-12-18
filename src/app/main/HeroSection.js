// HeroSection.js
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { getHeroImage } from "../../services/cmsService";

export default function HeroSection() {
  const redContainerRef = useRef(null);
  const [fontSizeCREAMOS, setFontSizeCREAMOS] = useState(null);
  const [fontSizeTuLoPiensas, setFontSizeTuLoPiensas] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [heroImageUrl, setHeroImageUrl] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false); 


  useEffect(() => {
    async function fetchImage() {
      try {
        const data = await getHeroImage();
        setHeroImageUrl(data.heroImageUrl);
      } catch (error) {
        console.error("Error obteniendo la imagen del Hero:", error);
      }
    }

    fetchImage();
  }, []);

  const calculateFontSizes = () => {
    if (!redContainerRef.current) {
      return { creamos: "16px", tuLoPiensas: "12px" };
    }

    const containerWidth = redContainerRef.current.offsetWidth;
    const minFontSizeCREAMOS = 50;
    const minFontSizeTuLoPiensas = 20;

    const calculatedFontSizeCREAMOS = Math.min(
      Math.max(minFontSizeCREAMOS, containerWidth / 5.5),
      200
    );

    const calculatedFontSizeTuLoPiensas = Math.min(
      Math.max(minFontSizeTuLoPiensas, containerWidth / 15.4),
      72
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
    <div
      className={`relative flex flex-col items-center justify-center h-full w-full transition-colors duration-500 ${
        imageLoaded ? "bg-transparent" : "bg-black"
      }`}
    >
      {heroImageUrl && (
        <img
          src={heroImageUrl}
          alt="Hero Background"
          className={`absolute top-0 left-0 w-full h-full object-cover -z-10 transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: "center" }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
        />
      )}

      <div
        className={`absolute top-0 left-0 w-[48%] h-full flex flex-col justify-start items-start px-12 lg:pl-24 lg:pr-12 transition-opacity duration-300 ease-in-out ${
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
                MarketingLAB es una empresa innovadora, especializada en inflables y
                soportes publicitarios, ofrecemos soluciones creativas y de alto impacto
                para capturar la atención.
              </p>
              <button
                className="mt-5 px-6 py-2 text-white font-poppins hover:bg-[#A11220] hover:brightness-110 transition-all duration-300 self-start"
                style={{ borderRadius: "15px", backgroundColor: "#DB182E" }}
              >
                Contáctanos
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
