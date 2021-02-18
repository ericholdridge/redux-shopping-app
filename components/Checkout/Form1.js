import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateCheckoutToken } from "../../redux/actions/checkout/generateCheckoutToken/generateCheckoutToken";
import AddressForm from "./AddressForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Form1 = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(generateCheckoutToken(cart.cart.id));
  }, []);

  return (
    <section className="checkout min-h-screen bg-gray-100 flex justify-center">
      {/* Make sure there is a token first, if not show a spinner/loading icon */}
      {cart.token.id ? (
        <AddressForm cart={cart} />
      ) : (
        <FontAwesomeIcon
          icon={faCircleNotch}
          spin
          size="2x"
          className="block"
        />
      )}
    </section>
  );
};

export default Form1;
