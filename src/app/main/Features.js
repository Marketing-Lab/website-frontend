// Features.js
"use client";

import React from "react";
import { FaShieldAlt, FaWater, FaSun, FaBullhorn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const featuresData = [
  {
    icon: <FaShieldAlt className="text-yellow-500 text-4xl" />,
    title: "Material resistente",
    description: "Durabilidad asegurada para cualquier evento.",
    bgColor: "bg-yellow-100",
    hoverEffect: { scale: 1.2 },
  },
  {
    icon: <FaWater className="text-blue-500 text-4xl" />,
    title: "Impermeable",
    description: "Protección contra cualquier clima.",
    bgColor: "bg-blue-100",
    hoverEffect: { y: -5 },
  },
  {
    icon: <FaSun className="text-red-500 text-4xl" />,
    title: "Protección UV",
    description: "Mantiene los colores vivos bajo el sol.",
    bgColor: "bg-red-100",
    hoverEffect: { rotate: 15 },
  },
  {
    icon: <FaBullhorn className="text-green-500 text-4xl" />,
    title: "Publicidad de impacto",
    description: "Captura la atención con diseños únicos.",
    bgColor: "bg-green-100",
    hoverEffect: { rotate: -10 },
  },
];

const Features = () => {
  return (
    <section className="w-full py-10 pb-16">
      <h2 className="text-3xl font-bold text-center mb-8 font-poppins">Características</h2>
      <div className="flex flex-wrap justify-around items-center gap-8">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <motion.div 
              className={`${feature.bgColor} p-6 rounded-full mb-4`}
            >
              <motion.div whileHover={feature.hoverEffect}>
                {feature.icon}
              </motion.div>
            </motion.div>
            <h3 className="text-lg font-semibold font-poppins">{feature.title}</h3>
            <p className="text-sm text-gray-600 font-poppins">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
