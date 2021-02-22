import Link from "next/link";
import React from "react";

const EmptyCart = () => {
  return (
    <div className="container min-h-full mx-auto flex py-20 flex-col">
      <Link href="/">
        <a className="text-white font-bold underline">Back to Products</a>
      </Link>
      <p className="text-white font-bold text-lg mt-4">Your cart is empty.</p>
    </div>
  );
};

export default EmptyCart;
