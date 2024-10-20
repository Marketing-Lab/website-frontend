// ProductList.js
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Red Raven t2",
      price: 399,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Nike Air Zoom",
      price: 399,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Fuji X-Pro3",
      price: 399,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
