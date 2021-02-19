import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product/Product";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="container px-4 md:px-0 mx-auto py-20 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-14">
      {products.map((product) => (
        <Product key={product.id}product={product} />
      ))}
    </div>
  );
};

export default Products;

// container py-24 mx-auto grid grid-cols-3 gap-36
