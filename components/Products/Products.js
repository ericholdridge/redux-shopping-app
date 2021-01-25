import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product/Product";

// Styles
import styles from "../../styles/products/products.module.scss"

const Products = () => {
  const productInfo = useSelector((state) => state.products);
  return (
    <div className={styles.products}>
      <div className={`container ${styles.container}`}>
        {productInfo.map(item => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
