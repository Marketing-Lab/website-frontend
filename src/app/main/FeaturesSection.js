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
    imageUrl: "https://i.postimg.cc/J0D3YH6g/5d3374ce001fb10f3785cbded01d03a8.png",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/busqueda-completa",
    cta: "Learn more",
    imageUrl: "https://i.postimg.cc/LXs3fbzm/ee0adea829685cb4d982af2fb20e7bd2.jpg",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/multilingue",
    cta: "Learn more",
    imageUrl: "https://i.postimg.cc/5NQpnTD0/44d5b53bd25272c458f8219d3e3533e0.jpg",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/calendario",
    cta: "Learn more",
    imageUrl: "https://i.postimg.cc/wjh2dJqY/4d54a9623cdd14dcb3fa9297eae19a4c.jpg",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/notificaciones",
    cta: "Learn more",
    imageUrl: "https://i.postimg.cc/3RbCZFBm/b7422e9e8bb1cd04e145a51993365b5f.png",
  },
  {
    Icon: FileTextIcon,
    name: "Backup files",
    description: "Create backups for your important files.",
    href: "/backup-archivos",
    cta: "Learn more",
    imageUrl: "https://i.postimg.cc/wjK2PFdk/8605267b2c7a36db7ccec88368ec3332.jpg",
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
              background={
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={features[0].imageUrl}
                    alt="Feature background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                </div>
              }
              className="h-64 flex-grow bg-white text-white shadow-lg rounded-lg p-6 relative overflow-hidden"
            />
            <BentoCard
              {...features[1]}
              background={
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={features[1].imageUrl}
                    alt="Feature background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                </div>
              }
              className="h-32 flex-grow bg-white text-white shadow-lg rounded-lg p-6 relative overflow-hidden"
            />
          </div>

          {/* Segunda columna */}
          <div className="flex flex-col gap-4 h-full">
            <BentoCard
              {...features[2]}
              background={
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={features[2].imageUrl}
                    alt="Feature background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                </div>
              }
              className="h-32 flex-grow bg-white text-white shadow-lg rounded-lg p-6 relative overflow-hidden"
            />
            <BentoCard
              {...features[3]}
              background={
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={features[3].imageUrl}
                    alt="Feature background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                </div>
              }
              className="h-64 flex-grow bg-white text-white shadow-lg rounded-lg p-6 relative overflow-hidden"
            />
          </div>

          {/* Tercera columna */}
          <div className="flex flex-col gap-4 h-full">
            <BentoCard
              {...features[4]}
              background={
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={features[4].imageUrl}
                    alt="Feature background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                </div>
              }
              className="h-64 flex-grow bg-white text-white shadow-lg rounded-lg p-6 relative overflow-hidden"
            />
            <BentoCard
              {...features[5]}
              background={
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={features[5].imageUrl}
                    alt="Feature background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                </div>
              }
              className="h-32 flex-grow bg-white text-white shadow-lg rounded-lg p-6 relative overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
