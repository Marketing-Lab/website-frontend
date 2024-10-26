"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { getNavbarData } from "../../services/cmsService";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarData, setNavbarData] = useState({ logoUrl: "", phoneNumber: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getNavbarData();
        setNavbarData(data);
      } catch (error) {
        console.error("Error obteniendo datos del navbar:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full h-16 bg-black text-white shadow-md flex items-center px-4 fixed top-0 left-0 z-50">
      <div className="w-16 mx-2 md:mx-7">
        {!loading && navbarData.logoUrl && (
          <Image
            src={navbarData.logoUrl}
            alt="MarketingLab Logo"
            width={80}
            height={30}
            className="object-contain"
          />
        )}
      </div>

      <div
        className={`flex-none ml-2 md:ml-4 flex items-center transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <FaWhatsapp className="text-green-500 mr-1 md:mr-2" size={20} />
        <span className="font-poppins font-normal text-sm md:text-base">
          {navbarData.phoneNumber}
        </span>
      </div>

      <div className="flex-1 flex justify-end items-center pr-2 md:pr-4">
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

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

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
