// Main.js
import React from "react";
import MainNavbar from "./MainNavbar";
import heroImage from "../../assets/hero.png"; 
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"; // Asegúrate de que la ruta sea correcta
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "Guardar tus archivos",
    description: "Guardamos automáticamente tus archivos mientras escribes.",
    href: "/guardar-archivos",
    cta: "Aprende más",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="" />, // Puedes reemplazar con una imagen real si lo deseas
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Búsqueda de texto completo",
    description: "Busca en todos tus archivos en un solo lugar.",
    href: "/busqueda-completa",
    cta: "Aprende más",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingüe",
    description: "Soporta más de 100 idiomas y contando.",
    href: "/multilingue",
    cta: "Aprende más",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendario",
    description: "Usa el calendario para filtrar tus archivos por fecha.",
    href: "/calendario",
    cta: "Aprende más",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notificaciones",
    description:
      "Recibe notificaciones cuando alguien comparte un archivo o te menciona en un comentario.",
    href: "/notificaciones",
    cta: "Aprende más",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
  },
];

export default function Main() {
  return (
    <>
      {/* Barra de Navegación */}
      <div className="w-screen">
        <MainNavbar />
      </div>

      {/* Sección de Héroe */}
      <main
        className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <h1 className="relative z-10 text-4xl font-bold text-white text-center px-4 md:text-6xl lg:text-7xl">
          Bienvenide
        </h1>
        {/* Puedes agregar un overlay oscuro para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </main>

      {/* Sección Azul */}
      <section className="w-full bg-blue-500 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">aaa</h2>
          <p className="text-white text-lg px-4 md:px-20 lg:px-40">
            aaa
          </p>
        </div>
      </section>
      
      {/* Sección del BentoGrid */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Características</h2>
          <BentoGrid className="grid lg:grid-rows-3 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <BentoCard
                key={feature.name}
                Icon={feature.Icon}
                title={feature.name}
                description={feature.description}
                href={feature.href}
                cta={feature.cta}
                background={feature.background}
                className={`${feature.className} relative bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow`}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
    </>
  );
}
