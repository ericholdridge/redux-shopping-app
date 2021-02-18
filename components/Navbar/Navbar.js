import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { fetchCart } from "../../redux/actions/fetchCart/fetchCart";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  {
    /* When a user initially adds an item to the cart, the cart object has multiple nested cart objects which is implemented by the API. Once the user goes to the cart page, the cart object changes, that's why we check to make sure it has the correct cart object in the useEffect*/
  }
  useEffect(() => {}, [
    cart?.cart?.total_items ? cart?.cart?.total_items : cart?.total_items,
  ]);

  return (
    <nav className="navbar py-6 shadow-2xl" style={{ background: "#242730" }}>
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
            <span className="rounded-full h-4 w-4 p-3 bg-white text-black flex justify-center items-center">
              {/* When a user  adds an item to the cart, the cart object has multiple nested cart objects which is implemented by the API. Once the user goes to the cart page, the cart object changes */}
              {cart?.cart?.total_items
                ? cart?.cart?.total_items
                : cart?.total_items}
            </span>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
