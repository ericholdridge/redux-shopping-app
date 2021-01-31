import React from "react";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import Navbar from "../../components/Navbar/Navbar";

const checkoutPage = () => {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto pt-10">
        <CheckoutForm />
      </div>
    </section>
  );
};

export default checkoutPage;
