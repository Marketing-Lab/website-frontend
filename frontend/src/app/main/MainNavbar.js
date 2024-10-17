"use client";

import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function MainNavbar() {
  // Estado para controlar si el menú está visible
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar el menú cuando se haga clic fuera
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-screen h-16 bg-black text-white shadow-md flex items-center px-4 relative">
      {/* Logo */}
      <div className="flex-none w-24">
        <Image
          src="https://i.imgur.com/ZGUx12p.png"
          alt="MarketingLab Logo"
          width={50}
          height={50}
          className="rounded-md object-contain"
        />
      </div>

      {/* Opciones de Navegación */}
      <div className="flex-1 flex justify-end items-center gap-8 pr-4">
        <a href="#nosotros" className="text-white hover:text-gray-300 px-4 py-2 rounded-md">
          Nosotros
        </a>
        <a href="#catalogo" className="text-white hover:text-gray-300 px-4 py-2 rounded-md">
          Catálogo
        </a>
        <a href="#contacto" className="text-white hover:text-gray-300 px-4 py-2 rounded-md">
          Contáctanos
        </a>
      </div>

      {/* Avatar con menú */}
      <div className="flex-none w-10 flex items-center justify-center relative">
        <Avatar
          as="button"
          onClick={toggleMenu} // Alterna la visibilidad del menú al hacer clic
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          alt="U"
          size="md"
        />
        {/* Menú estático del avatar */}
        {isMenuOpen && (
          <div
            className="absolute top-16 right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-2 z-10"
            onMouseLeave={closeMenu} // Cierra el menú si se hace clic fuera
          >
            <ul className="space-y-2">
              <li>
                <a
                  href="#perfil"
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Perfil
                </a>
              </li>
              <li>
                <a
                  href="#configuracion"
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Configuración
                </a>
              </li>
              <li>
                <a
                  href="#cerrar-sesion"
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
