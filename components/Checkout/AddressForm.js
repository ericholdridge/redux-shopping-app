import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchShippingCountries } from "../../redux/actions/shipping/fetchShippingCountries";

const AddressForm = ({ cart }) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    dispatch(fetchShippingCountries(cart.token.id));
  }, [cart]);

  return (
    <div className="container mx-auto pt-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded mx-auto shadow-xl p-4 max-w-3xl bg-white"
      >
        <h1 className="pt-4 pb-6 font-bold text-lg">Shipping information</h1>
        <div className="flex max-w-3xl">
          <div className="flex flex-col w-1/2">
            <label htmlFor="firstName">First Name*</label>
            <input
              className="border-b-2"
              type="text"
              name="firstName"
              ref={register({ required: true, minLength: 2 })}
            />
            {errors.firstName && (
              <p className="text-red-400 font-bold">First name is required.</p>
            )}
          </div>
          <div className="flex flex-col ml-4 w-1/2">
            <label htmlFor="lastName">Last Name*</label>
            <input
              className="border-b-2"
              type="text"
              name="lastName"
              ref={register({ required: true, minLength: 2 })}
            />
            {errors.lastName && (
              <p className="text-red-400 font-bold">Last name is required.</p>
            )}
          </div>
        </div>
        <div className="flex max-w-3xl mt-6">
          <div className="flex flex-col w-1/2">
            <label htmlFor="address">Address*</label>
            <input
              className="border-b-2"
              type="text"
              name="address"
              ref={register({ required: true })}
            />
            {errors.address && (
              <p className="text-red-400 font-bold">Address is required.</p>
            )}
          </div>
          <div className="flex flex-col ml-4 w-1/2">
            <label htmlFor="email">Email*</label>
            <input
              className="border-b-2"
              type="text"
              name="email"
              ref={register({
                required: true,
                pattern: /^[^ ]+@[^ ]+.[a-z]{2,6}$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="text-red-400 font-bold">Email is required.</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="text-red-400 font-bold">
                Email address is invalid.
              </p>
            )}
          </div>
        </div>
        <div className="flex max-w-3xl mt-6">
          <div className="flex flex-col w-1/2">
            <label htmlFor="city">City*</label>
            <input
              className="border-b-2"
              type="text"
              name="city"
              ref={register({ required: true })}
            />
            {errors.city && (
              <p className="text-red-400 font-bold">City is required.</p>
            )}
          </div>
          <div className="flex flex-col ml-4 w-1/2">
            <label htmlFor="zip">Zip / Postal code*</label>
            <input
              className="border-b-2"
              type="text"
              name="zip"
              ref={register({ required: true })}
            />
            {errors.zip && (
              <p className="text-red-400 font-bold">Zip code is required.</p>
            )}
          </div>
        </div>
        <div>
          <button className="bg-black py-1 px-3 text-white rounded font-bold flex jusfiy-end mt-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
