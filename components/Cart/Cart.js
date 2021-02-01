import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/actions/fetchCart/fetchCart";
import CartItem from "./CartItem/CartItem";
import Link from "next/link"

const cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <div className="container mx-auto py-24">
      <div className="flex justify-between mb-10 items-center">
        <div className="inline-flex flex-col font-medium">
          <h1>Total Items: {cart.total_items}</h1>
          <span className="inline-block">
            Total Price: {cart?.subtotal?.formatted_with_symbol}
          </span>
        </div>
        <div className="flex w-56 justify-between">
          <Link href="/checkout/step1">
            <a className="bg-green-400 px-2 py-2 font-medium rounded border-none">
              Checkout
            </a>
          </Link>
          <button className="bg-red-400 px-2 py-2 font-medium rounded border-none">
            Remove Items
          </button>
        </div>
      </div>
      <CartItem cart={cart} />
    </div>
  );
};

export default cart;
