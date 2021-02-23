import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";

const confirmationPage = () => {
  const shipping = useSelector((state) => state.shipping.shippingFormData);
  return (
    <section className="confirmation">
      <Navbar />
      <div className="container mx-auto pt-40 flex justify-center">
        <div className="inline-flex justify-center flex-col shadow-md rounded-lg p-4">
          <h1 className="text-center font-bold text-lg">Success!</h1>
          <p className="py-2">
            Thank you for your purchase, {shipping.firstName}{" "}
            {shipping.lastName}.
          </p>
          <div className="flex justify-center">
            <Link href="/">
              <a className="underline">Return Home</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default confirmationPage;
