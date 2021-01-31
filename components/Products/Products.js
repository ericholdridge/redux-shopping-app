import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product/Product";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="container py-24 mx-auto grid grid-cols-3 gap-36">
      {products.map((product) => (
        <Product key={product.id}product={product} />
      ))}
    </div>
  );
};

export default Products;
