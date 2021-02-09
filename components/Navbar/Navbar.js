import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/actions/fetchCart/fetchCart";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <nav className="navbar py-6 shadow-2xl" style={{background: "#242730"}}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">ReduxShoppingApp</h1>
        <ul className="flex items-center">
          <li className="mx-4">
            <Link href="/">
              <a className="text-white">Products</a>
            </Link>
          </li>
          <li className="mx-4">
            <a className="text-white">About</a>
          </li>
          <li className="mx-4">
            <a className="text-white">Services</a>
          </li>
          <div className="flex items-center">
            <li className="mx-4">
              <Link href="/cart">
                <a className="text-white">Cart</a>
              </Link>
            </li>
            <span>{cart.total_items}</span>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
