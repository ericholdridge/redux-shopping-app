import { useRouter } from "next/dist/client/router";
import React from "react";
import Form1 from "../../../components/Checkout/Form1";
import Navbar from "../../../components/Navbar/Navbar";
import StepIndicator from "../../../components/StepIndicator";

const index = () => {
  const router = useRouter();
  const { step } = router.query;

  return (
    <>
      <Navbar />
      <StepIndicator />
      {step === "step1" && <Form1 />}
      {step === "step2" && (
        <div>
          <p>This is step 2</p>
        </div>
      )}
    </>
  );
};

export default index;
