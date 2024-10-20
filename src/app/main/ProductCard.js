import React from "react";
import { HeartIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

const ProductCard = ({ image, title }) => {
  return (
    <div className="group relative w-[330px] h-[300px] bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer 
      hover:bg-gray-50 hover:shadow-2xl hover:-translate-y-1">
      {/* Imagen fija */}
      <div className="w-full h-[210px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido Inferior */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-sm text-gray-600">Cotizar producto</p>
            <ArrowRightIcon className="h-4 w-4 text-blue-500" />
          </div>
        </div>
        <button className="p-1 rounded-full hover:bg-gray-100 transition">
          <HeartIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
