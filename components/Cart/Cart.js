import React from "react";
import { useSelector } from "react-redux";

const cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div>
      These are your cart items.
      <p>Hello</p>
      {cartItems?.line_items?.map((item) => (
        <div>
          <h1>{item.product_name}</h1>
        </div>
      ))}
      {console.log(cartItems)}
    </div>
  );
};

export default cart;
