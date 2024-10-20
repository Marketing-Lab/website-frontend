import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: "https://i.postimg.cc/J0D3YH6g/5d3374ce001fb10f3785cbded01d03a8.png",
      title: "Casetas",
      price: "Cotizar",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/LXs3fbzm/ee0adea829685cb4d982af2fb20e7bd2.jpg",
      title: "Productos",
      price: "Cotizar",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/wjh2dJqY/4d54a9623cdd14dcb3fa9297eae19a4c.jpg",
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
