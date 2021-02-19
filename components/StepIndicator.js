import React from "react";
import Link from "next/link";

const StepIndicator = () => {
  const steps = [
    {
      path: "/checkout/step1",
      name: "Address Form",
      id: 1,
    },
    {
      path: "/checkout/step2",
      name: "Checkout Form",
      id: 2,
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="flex justify-center">
        {steps.map((step) => (
          <Link key={step.id} href="/checkout/[step]" as={`${step.path}`}>
            <a className="bg-white shadow-xl flex justify-center items-center mx-2 px-2 rounded font-bold">
              {step.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
