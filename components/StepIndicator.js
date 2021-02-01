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
    <div className="flex mx-auto w-32 pt-20 justify-between">
      {steps.map((step, index) => (
        <Link key={index} href="/checkout/[step]" as={`${step.path}`}>
          <a className="w-10 h-10 border-2 border-gray-300 shadow-xl rounded-full flex justify-center items-center">
            {index + 1}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default StepIndicator;
