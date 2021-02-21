import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const [toggleNav, setToggleNav] = useState(false);
  {
    /* When a user initially adds an item to the cart, the cart object has multiple nested cart objects which is implemented by the API. Once the user goes to the cart page, the cart object changes, that's why we check to make sure it has the correct cart object in the useEffect*/
  }
  useEffect(() => {}, [
    cart?.cart?.total_items ? cart?.cart?.total_items : cart?.total_items,
  ]);

  return (
    <nav className="navbar py-6 shadow-2xl" style={{ background: "#242730" }}>
      <div className="container px-4 md:px-0 mx-auto md:flex md:justify-between md:items-center">
        <div className="wrapper flex items-center justify-between">
          <Link href="/">
            <a className="text-white font-bold text-lg">ReduxShoppingApp</a>
          </Link>
          <div className="md:hidden">
            <FontAwesomeIcon
              onClick={() => setToggleNav(!toggleNav)}
              icon={faBars}
              className="text-white cursor-pointer"
            />
          </div>
        </div>
        <ul
          className={
            toggleNav
              ? "flex flex-col md:flex md:flex-row"
              : "hidden md:flex md:flex-row items-center"
          }
        >
          <li className="md:mx-3 lg:px-4 my-2">
            <Link href="/">
              <a className="text-white">Products</a>
            </Link>
          </li>
          <li className="md:mx-3 lg:px-4 my-2">
            <a className="text-white">About</a>
          </li>
          <li className="md:mx-3 lg:px-4 my-2">
            <a className="text-white">Services</a>
          </li>
          <li className="md:ml-3 lg:pl-4 my-2">
            <Link href="/cart">
              <a className="text-white flex items-center relative">
              <FontAwesomeIcon
                icon={faShoppingBag}
                size="lg"
                className="block"
              />
                <span className="rounded-full h-5 w-5 text-black bg-white font-bold flex justify-center items-center text-sm absolute top-0 left-3">
                  {/* When a user  adds an item to the cart, the cart object has multiple nested cart objects which is implemented by the API. Once the user goes to the cart page, the cart object changes */}
                  {cart?.cart?.total_items
                    ? cart?.cart?.total_items
                    : cart?.total_items}
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
