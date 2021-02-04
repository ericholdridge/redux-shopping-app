import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateCheckoutToken } from "../../redux/actions/checkout/generateCheckoutToken/generateCheckoutToken";
import AddressForm from "./AddressForm";

const Form1 = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(generateCheckoutToken(cart.cart.id));
  }, []);

  return (
    <section className="checkout min-h-screen bg-gray-100">
      {cart.token.id ? <AddressForm cart={cart} /> : <p>Implement a spinner to make sure there is a checkout token id first AND THEN DISPLAY THE FORM</p>}
    </section>
  );
};

export default Form1;
