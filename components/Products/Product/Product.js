import React from "react";
import Image from "next/image";

// Styles
import styles from "../../../styles/products/product.module.scss";

const Product = ({ product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <Image
          src={product.media.source}
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name_price}>
          <h2>{product.name}</h2>
          <h2>{product.price.formatted_with_symbol}</h2>
        </div>
        <p dangerouslySetInnerHTML={{ __html: product.description }} />
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
