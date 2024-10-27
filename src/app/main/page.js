"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Images from "./ImagesSection1";
import MulticolorLine from "./MulticolorLine";
import Features from "./Features";
import ImageGallery from "./ImagesSection2";
import ProductList from "./ProductList";
import {
  getImagesSection1,
  getImagesSection2,
  getFeatures,
} from "../../services/cmsService";

export default function Main() {
  const [imagesSection1, setImagesSection1] = useState([]);
  const [imagesSection2, setImagesSection2] = useState([]);
  const [features, setFeatures] = useState([]);

  const [loadingSection1, setLoadingSection1] = useState(true);
  const [loadingSection2, setLoadingSection2] = useState(true);
  const [loadingFeatures, setLoadingFeatures] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const section1Images = await getImagesSection1();
        setImagesSection1(section1Images);
      } finally {
        setLoadingSection1(false);
      }

      try {
        const section2Images = await getImagesSection2();
        setImagesSection2(section2Images);
      } finally {
        setLoadingSection2(false);
      }

      try {
        const featureData = await getFeatures();
        setFeatures(featureData);
      } finally {
        setLoadingFeatures(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <main className="relative mt-16 flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
        <HeroSection />
      </main>
      <MulticolorLine />

      <div
        className={`transition-opacity duration-500 bg-white ${
          loadingSection1 ? "opacity-0" : "opacity-100"
        }`}
      >
        <Images images={imagesSection1} />
      </div>

      <div
        className={`transition-opacity duration-500 bg-white ${
          loadingFeatures ? "opacity-0" : "opacity-100"
        }`}
      >
        <Features features={features} />
      </div>

      <div
        className={`transition-opacity duration-500 bg-white ${
          loadingSection2 ? "opacity-0" : "opacity-100"
        }`}
      >
        <ImageGallery images={imagesSection2} />
      </div>

      <ProductList />

      <div className="w-full flex justify-center my-10">
        <button
          className="px-8 py-3 text-white bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full font-poppins"
          onClick={() => (window.location.href = "/catalogo")}
        >
          Ver Catálogo
        </button>
      </div>
    </>
  );
}
