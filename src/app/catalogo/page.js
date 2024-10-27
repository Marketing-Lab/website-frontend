'use client';

// src/pages/catalogo.js

import React from "react";
import ProductCard from "../main/ProductCard";

const products = [
  {
    id: 1,
    title: "Inflable de producto",
    image: "https://via.placeholder.com/400x300?text=Placeholder",
  },
  {
    id: 2,
    title: "Esferas inflables",
    image: "https://via.placeholder.com/400x300?text=Placeholder",
  },
  {
    id: 3,
    title: "Pantalla inflable",
    image: "https://via.placeholder.com/400x300?text=Placeholder",
  },
  {
    id: 4,
    title: "Rotulado de vehículo",
    image: "https://via.placeholder.com/400x300?text=Placeholder",
  },
  {
    id: 5,
    title: "Toldo",
    image: "https://via.placeholder.com/400x300?text=Placeholder",
  },
  {
    id: 6,
    title: "Letreros",
    image: "https://via.placeholder.com/400x300?text=Placeholder",
  },
  {
    id: 7,
    title: "Muñecos y Sky Dancers",
    image: "https://via.placeholder.com/400x300?text=Placeholder",
  },
  {
    id: 8,
    title: "Glorificadores de botella",
    image: "https://via.placeholder.com/400x300?text=Placeholder",
  },
  {
    id: 9,
    title: "Mostrador portátil",
    image: "https://via.placeholder.com/400x300?text=Placeholder",
  },
];

export default function Catalogo() {
  return (
    <div className="mt-16 min-h-screen bg-gray-100">
      <section className="py-4">
        <div className="max-w-screen-lg mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-10">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
              />
            ))}
          </div>
          {products.length === 0 && (
            <p className="text-center text-gray-600 mt-8">
              No hay productos disponibles.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
