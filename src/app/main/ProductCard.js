// ProductCard.js
import React from "react";
import { HeartIcon } from "@heroicons/react/20/solid";

const ProductCard = ({ image, title }) => {
  return (
    <div className="group relative w-full h-64 bg-gray-50 rounded-2xl overflow-hidden shadow-md">
      {/* Sección Superior: Imagen */}
      <div className="h-4/6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sección Inferior: Título e Ícono */}
      <div className="h-2/6 px-5 py-0 flex items-center justify-between font-poppins transition-all duration-300">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-gray-800 transition-all duration-300 group-hover:-translate-y-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:-translate-y-2">
            Cotizar producto
          </p>
        </div>
        <button className="p-1 rounded-full hover:bg-gray-100 transition">
          <HeartIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
