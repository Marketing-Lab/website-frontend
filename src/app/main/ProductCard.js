import React from "react";
import { HeartIcon } from "@heroicons/react/20/solid";

const ProductCard = ({ image, title }) => {
  return (
    <div className="group relative w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Sección Superior: Imagen */}
      <div className="w-full aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sección Inferior: Título e Ícono */}
      <div className="p-5 flex items-center justify-between font-poppins">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-gray-800 transition-all duration-300 group-hover:-translate-y-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2">
            Cotizar producto
          </p>
        </div>
        <button className="p-1 rounded-full hover:bg-gray-100 transition">
          <HeartIcon className="h-6 w-6 text-gray-400 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
