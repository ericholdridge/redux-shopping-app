import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/actions/fetchCart/fetchCart";
import CartItem from "./CartItem/CartItem";
import Link from "next/link";
import { removeAllItems } from "../../redux/actions/removeAllItems/removeAllItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <div className="container mx-auto py-24">
      <div className="px-4 md:px-0 flex justify-between mb-10 items-center">
        <div className="inline-flex flex-col font-medium">
          <h1 className="text-white font-bold flex items-center">
            Total Items:{" "}
            {cart?.total_items ? (
              cart?.total_items
            ) : (
              <FontAwesomeIcon
                icon={faCircleNotch}
                spin
                size="lg"
                className="block ml-2"
              />
            )}
          </h1>
          <span className="inline-block text-white font-bold">
            Total Price:{" "}
            {cart?.subtotal?.formatted_with_symbol ? (
              cart?.subtotal?.formatted_with_symbol
            ) : (
              <FontAwesomeIcon
                icon={faCircleNotch}
                spin
                size="lg"
                className="block ml-2"
              />
            )}
          </span>
        </div>
        <div className="flex w-56 justify-between">
          <Link href="/checkout/step1">
            <a className="bg-green-400 px-2 py-2 font-medium rounded border-none">
              Checkout
            </a>
          </Link>
          <button
            onClick={() => dispatch(removeAllItems(cart.id))}
            className="bg-red-400 px-2 py-2 font-medium rounded border-none"
          >
            Remove Items
          </button>
        </div>
      </div>
      <CartItem cart={cart} />
    </div>
  );
};

export default cart;
