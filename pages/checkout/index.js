import React from "react";
import Form1 from "../../components/Checkout/Form1";
import Navbar from "../../components/Navbar/Navbar";

const checkoutPage = () => {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto pt-10">
        <Form1 />
      </div>
    </section>
  );
};

export default checkoutPage;
