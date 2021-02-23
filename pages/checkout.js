import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import AddressForm from "../components/Checkout/AddressForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { generateCheckoutToken } from "../redux/actions/checkout/generateCheckoutToken/generateCheckoutToken";

const checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(generateCheckoutToken(cart.cart?.id));
  }, []);

  return (
    <div>
      <Navbar />
      {cart.token.id ? (
        <AddressForm cart={cart} />
      ) : (
        <FontAwesomeIcon
          icon={faCircleNotch}
          spin
          size="lg"
          className="block"
        />
      )}
    </div>
  );
};

export default checkout;
