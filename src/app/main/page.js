// Main.js
"use client";

import React from "react";
import MainNavbar from "./MainNavbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import Images from "./Images";
import MulticolorLine from "./MulticolorLine";
import { FaShieldAlt, FaWater, FaSun, FaBullhorn } from 'react-icons/fa';

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
      
      <section className="w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-8 font-poppins">Características</h2>
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-6 rounded-full mb-4">
              <FaShieldAlt className="text-yellow-500 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold font-poppins">Material resistente</h3>
            <p className="text-sm text-gray-600 font-poppins">Durabilidad asegurada para cualquier evento.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-6 rounded-full mb-4">
              <FaWater className="text-blue-500 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold font-poppins">Impermeable</h3>
            <p className="text-sm text-gray-600 font-poppins">Protección contra cualquier clima.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-100 p-6 rounded-full mb-4">
              <FaSun className="text-red-500 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold font-poppins">Protección UV</h3>
            <p className="text-sm text-gray-600 font-poppins">Mantiene los colores vivos bajo el sol.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-6 rounded-full mb-4">
              <FaBullhorn className="text-green-500 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold font-poppins">Publicidad de impacto</h3>
            <p className="text-sm text-gray-600 font-poppins">Captura la atención con diseños únicos.</p>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
    </>
  );
}
