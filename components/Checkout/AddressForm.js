import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchShippingCountries } from "../../redux/actions/shipping/fetchShippingCountries";
import { fetchShippingSubdivisions } from "../../redux/actions/shipping/fetchShippingSubdivisions";
import { updateShippingCode } from "../../redux/actions/shipping/updateShippingCountry";
import { fetchShippingMethods } from "../../redux/actions/shipping/fetchShippingMethods";
import { updateShippingSubdivision } from "../../redux/actions/shipping/updateShippingDivision";
import { fetchShippingFormData } from "../../redux/actions/shipping/fetchShippingFormData";
import { updateShippingOption } from "../../redux/actions/shipping/updateShippingOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const AddressForm = ({ cart }) => {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const shipping = useSelector((state) => state.shipping);
  const shippingCode = useSelector((state) => state.shipping.shippingCountry);

  const options = shipping.shippingOptions.map((option) => ({
    id: option.id,
    label: `${option.description} - (${option.price.formatted_with_symbol})`,
  }));

  const onSubmit = (data) => {
    dispatch(fetchShippingFormData(data));
    router.push("/payment");
  };

  useEffect(() => {
    dispatch(fetchShippingCountries(cart.token.id));
  }, [cart]);

  useEffect(() => {
    if (shippingCode) dispatch(fetchShippingSubdivisions(shippingCode));
  }, [shippingCode]);

  useEffect(() => {
    if (shipping.shippingSubdivision)
      dispatch(
        fetchShippingMethods(
          cart.token.id,
          shippingCode,
          shipping.shippingSubdivision
        )
      );
  }, [shipping.shippingSubdivision]);

  return (
    <div className="container mx-auto sm:pt-4 px-4 sm:px-0 mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded mx-auto shadow-xl p-4 max-w-3xl bg-white"
      >
        <h1 className="pt-4 pb-6 font-bold text-lg">Shipping information</h1>
        <div className="flex max-w-3xl flex-col sm:flex-row">
          <div className="flex flex-col w-full sm:w-1/2">
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
          <div className="flex flex-col sm:ml-4 w-full sm:w-1/2 mt-4 sm:mt-0">
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
        <div className="flex max-w-3xl mt-6 flex-col sm:flex-row">
          <div className="flex flex-col w-full sm:w-1/2">
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
          <div className="flex flex-col sm:ml-4 w-full sm:w-1/2 mt-4 sm:mt-0">
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
          <div className="flex flex-col w-1/2 sm:w-1/2 mr-2 sm:mr-0">
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
          <div className="flex flex-col sm:ml-4 w-1/2 sm:w-1/2">
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
        <div className="flex justify-between flex-row sm:flex-row">
          <div className="flex flex-col mt-6 w-1/2 sm:w-1/2 mr-2">
            <label htmlFor="shipping">Shipping Country*</label>
            <select
              value={shipping.shippingCountry}
              onChange={(e) => dispatch(updateShippingCode(e.target.value))}
              className="border-b-2 mt-4"
              name="country"
              ref={register({ required: true })}
            >
              {Object.keys(shipping.shippingCountries).map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mt-6  w-1/2 sm:w-1/2">
            <label htmlFor="shipping">Shipping Subdivisions*</label>
            <select
              value={shipping.shippingSubdivision}
              onChange={(e) =>
                dispatch(updateShippingSubdivision(e.target.value))
              }
              className="border-b-2 mt-4"
              name="subdivision"
              ref={register({ required: true })}
            >
              {Object.keys(shipping.shippingSubdivisions).map(
                (subdivision, index) => (
                  <option key={index} value={subdivision}>
                    {subdivision}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="flex flex-col w-1/2 mt-6">
          <label htmlFor="shipping">Shipping Options*</label>
          <select
            value={shipping.shippingOption}
            onChange={(e) => dispatch(updateShippingOption(e.target.value))}
            className="border-b-2 mt-4"
            name="shippingOption"
            ref={register({ required: true })}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="h-8 mt-6 flex items-center">
          <Link href="/cart">
            <a className="bg-black text-white rounded font-bold h-full flex items-center justify-center px-2">
              Back to Cart
            </a>
          </Link>
          <button className="bg-black ml-2 text-white rounded font-bold h-full flex items-center justify-center px-2">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
