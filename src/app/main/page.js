// Main.js
"use client";

import React from "react";
import MainNavbar from "./MainNavbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import Images from "./Images";
import MulticolorLine from "./MulticolorLine";
import Features from "./Features";
import ImageGallery from "./ImageGallery";
import ProductList from "./ProductList";

export default function Main() {
  return (
    <>
      <div className="w-full">
        <MainNavbar />
      </div>
      <main className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
        <HeroSection />
      </main>
      <MulticolorLine />
      <Images
        images={[
          "https://i.postimg.cc/sfnPfk2D/i1.jpg",
          "https://i.postimg.cc/3RbCZFBm/b7422e9e8bb1cd04e145a51993365b5f.png",
          "https://i.postimg.cc/3JVgm2ps/i3.png",
          "https://i.postimg.cc/4Nm6YWKv/i4.jpg",
        ]}
      />
      <Features />

      <ImageGallery
        images={[
          "https://i.postimg.cc/sx2kV5w2/c.png",
          "https://i.postimg.cc/LXvdKxk7/d.jpg",
          "https://i.postimg.cc/sX3FNkW7/b.jpg",
          "https://i.postimg.cc/brFKddB9/a.jpg",
        ]}
      />

      <ProductList />
    </>
  );
}
