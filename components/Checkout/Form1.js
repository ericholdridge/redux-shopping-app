import React from "react";

const Form1 = () => {
  return (
    <div>
      <form action="" className="border-2 shadow-sm inline-block mt-4">
        <div className="flex">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" name="firstName" placeholder="John" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" name="lastName" placeholder="Doe" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form1;
