// ImageGallery.js
"use client";

import React from "react";

const ImageGallery = ({ images = [] }) => {
  const placeholder = "https://via.placeholder.com/400x300?text=Placeholder";

  return (
    <section className="w-full relative" style={{ paddingTop: '35%' }}>
      <div className="absolute top-0 left-0 w-full h-full flex">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="w-1/4 h-full">
            <img
              src={images[index] || placeholder}
              alt={`Imagen ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => (e.target.src = placeholder)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
