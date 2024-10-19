// FeaturesSection.js
import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
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
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/guardar-archivos",
    cta: "Learn more",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/busqueda-completa",
    cta: "Learn more",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/multilingue",
    cta: "Learn more",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/calendario",
    cta: "Learn more",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/notificaciones",
    cta: "Learn more",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Características</h2>
        <div className="grid grid-cols-3 gap-4 h-full min-h-screen auto-rows-fr">
  {/* Primera columna */}
  <div className="flex flex-col gap-4 h-full">
    <BentoCard
      {...features[0]}
      className="h-64 flex-grow bg-white shadow-lg rounded-lg p-6"
    />
    <BentoCard
      {...features[1]}
      className="h-32 flex-grow bg-white shadow-lg rounded-lg p-6"
    />
  </div>

  {/* Segunda columna */}
  <div className="flex flex-col gap-4 h-full">
    <BentoCard
      {...features[2]}
      className="h-32 flex-grow bg-white shadow-lg rounded-lg p-6"
    />
    <BentoCard
      {...features[3]}
      className="h-64 flex-grow bg-white shadow-lg rounded-lg p-6"
    />
  </div>

  {/* Tercera columna */}
  <div className="flex flex-col gap-4 h-full">
    <BentoCard
      {...features[4]}
      className="h-64 flex-grow bg-white shadow-lg rounded-lg p-6"
    />
    <BentoCard
      {...features[0]}
      className="h-32 flex-grow bg-white shadow-lg rounded-lg p-6"
    />
  </div>
        </div>
      </div>
    </section>
  );
}
