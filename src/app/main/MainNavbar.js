"use client";

import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full h-16 bg-black text-white shadow-md flex items-center px-4 relative">
      {/* Logo */}
      <div className="w-16 mx-2 md:mx-7">
        <Image
          src="https://i.postimg.cc/DznMTQSV/6066b025360d7867b0b6bea116b9d7ef.png"
          alt="MarketingLab Logo"
          width={80}
          height={30}
          className="object-contain"
        />
      </div>

      {/* Número de teléfono */}
      <div className="flex-none ml-2 md:ml-4 flex items-center">
        <FaWhatsapp className="text-green-500 mr-1 md:mr-2" size={20} />
        <span className="font-poppins font-normal text-sm md:text-base">
          +591 69440643
        </span>
      </div>

      {/* Menú de Navegación */}
      <div className="flex-1 flex justify-end items-center pr-2 md:pr-4">
        {/* Menú en pantallas medianas y grandes */}
        <div className="hidden md:flex gap-4 font-poppins font-light text-base">
          <a
            href="#nosotros"
            className="hover:text-gray-300 px-2 py-2 rounded-md transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#catalogo"
            className="hover:text-gray-300 px-2 py-2 rounded-md transition-colors"
          >
            Catálogo
          </a>
          <a
            href="#contacto"
            className="hover:text-gray-300 px-2 py-2 rounded-md transition-colors"
          >
            Contáctanos
          </a>
        </div>

        {/* Ícono de menú en pantallas pequeñas */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isMenuOpen && (
        <div
          className="absolute top-16 right-0 mt-2 w-full bg-black text-white shadow-lg p-4 flex flex-col items-center space-y-2 z-10 md:hidden"
          onClick={closeMenu}
        >
          <a
            href="#nosotros"
            className="hover:text-gray-300 px-2 py-2 rounded-md transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#catalogo"
            className="hover:text-gray-300 px-2 py-2 rounded-md transition-colors"
          >
            Catálogo
          </a>
          <a
            href="#contacto"
            className="hover:text-gray-300 px-2 py-2 rounded-md transition-colors"
          >
            Contáctanos
          </a>
        </div>
      )}
    </nav>
  );
}
