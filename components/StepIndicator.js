import React from "react";
import Link from "next/link";

const StepIndicator = () => {
  const steps = [
    {
      path: "/checkout/step1",
    },
    {
      path: "/checkout/step2",
    },
  ];

  return (
    <div className="bg-gray-100 pt-20">
      <div className="flex mx-auto justify-between w-32">
        {steps.map((step, index) => (
          <Link key={index} href="/checkout/[step]" as={`${step.path}`}>
            <a className="w-10 h-10 border-2 border-gray-300 bg-white shadow-xl rounded-full flex justify-center items-center">
              {index + 1}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
