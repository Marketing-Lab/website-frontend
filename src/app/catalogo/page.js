'use client';

// src/pages/catalogo.js

import React, { useState } from "react";
import ProductCard from "../main/ProductCard";

const categories = [
  { id: 1, name: "Inflables", icon: "🎈" },
  { id: 2, name: "Letreros", icon: "🪧" },
  { id: 3, name: "Construcciones", icon: "🏗️" },
  { id: 4, name: "Diseño arquitectónico", icon: "📐" },
  { id: 5, name: "Publicidad impresa", icon: "🖨️" },
  { id: 6, name: "Productos portátiles", icon: "🎒" },
];

const products = [
  {
    id: 1,
    title: "Inflable de producto",
    image: "https://i.postimg.cc/3JVgm2ps/i3.png",
    categoryId: 1,
  },
  {
    id: 2,
    title: "Esferas inflables",
    image: "https://i.postimg.cc/3JVgm2ps/i3.png",
    categoryId: 1,
  },
  {
    id: 3,
    title: "Pantalla inflable",
    image: "https://i.postimg.cc/3JVgm2ps/i3.png",
    categoryId: 1,
  },
  {
    id: 4,
    title: "Rotulado de vehículo",
    image: "https://i.postimg.cc/3JVgm2ps/i3.png",
    categoryId: 5,
  },
  {
    id: 5,
    title: "Toldo",
    image: "https://i.postimg.cc/3JVgm2ps/i3.png",
    categoryId: 6,
  },
  {
    id: 6,
    title: "Letreros",
    image: "https://i.postimg.cc/3JVgm2ps/i3.png",
    categoryId: 2,
  },
  {
    id: 7,
    title: "Muñecos y Sky Dancers",
    image: "https://i.postimg.cc/3JVgm2ps/i3.png",
    categoryId: 1,
  },
  {
    id: 8,
    title: "Glorificadores de botella",
    image: "https://i.postimg.cc/3JVgm2ps/i3.png",
    categoryId: 5,
  },
  {
    id: 9,
    title: "Mostrador portátil",
    image: "https://i.postimg.cc/3JVgm2ps/i3.png",
    categoryId: 6,
  },
];

export default function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory)
    : products;

  return (
    <div className="min-h-screen">
      {/* Sección de Categorías */}
      <section className="py-10">
        <div className="max-w-screen-lg mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Categorías
          </h2>
          <div className="flex justify-center flex-wrap gap-10">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`w-36 h-36 bg-white shadow-md rounded-xl flex flex-col items-center justify-center text-lg font-semibold hover:shadow-lg transition ${
                selectedCategory === null ? "border-4 border-blue-500" : ""
              }`}
            >
              <span className="text-4xl">🌐</span>
              <span>Todos</span>
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-36 h-36 bg-white shadow-md rounded-xl flex flex-col items-center justify-center text-lg font-semibold hover:shadow-lg transition ${
                  selectedCategory === category.id ? "border-4 border-blue-500" : ""
                }`}
              >
                <span className="text-4xl">{category.icon}</span>
                <span className="text-center">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Productos */}
      <section className="py-10">
        <div className="max-w-screen-lg mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            {selectedCategory
              ? categories.find((cat) => cat.id === selectedCategory)?.name
              : "Todos nuestros productos"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-white mt-8">
              No hay productos en esta categoría.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
