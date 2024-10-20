import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200",
      title: "Casetas",
      price: "Cotizar",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200",
      title: "Productos",
      price: "Cotizar",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200",
      title: "Pantallas",
      price: "Cotizar",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold text-center mb-8 font-poppins">
        Productos destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
