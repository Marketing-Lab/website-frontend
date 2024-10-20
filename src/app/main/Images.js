// Images.js
import React from "react";

export default function Images({ images = [] }) {
  const placeholder = "https://via.placeholder.com/800x500";

  return (
    <div className="w-full h-[80vh] flex">
      <div className="w-1/2 h-full">
        <img 
          src={images[0] || placeholder} 
          alt="Image 1" 
          className="w-full h-full object-cover"
          onError={(e) => e.target.src = placeholder}
        />
      </div>
      <div className="w-1/2 h-full flex">
        <div className="w-1/2 h-full">
          <img 
            src={images[1] || placeholder} 
            alt="Image 2" 
            className="w-full h-full object-cover"
            onError={(e) => e.target.src = placeholder}
          />
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="w-full h-1/2">
            <img 
              src={images[2] || placeholder} 
              alt="Image 3" 
              className="w-full h-full object-cover"
              onError={(e) => e.target.src = placeholder}
            />
          </div>
          <div className="w-full h-1/2">
            <img 
              src={images[3] || placeholder} 
              alt="Image 4" 
              className="w-full h-full object-cover"
              onError={(e) => e.target.src = placeholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
