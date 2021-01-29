import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/actions/fetchCart/fetchCart";
// Styles
import styles from "../../styles/navbar/navbar.module.scss";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, [cart]);
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <h1>ReduxShoppingApp</h1>
        <div>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <div className={styles.cartItems}>
              <li>
                <Link href="/cart">
                  <a>Shopping Cart</a>
                </Link>
              </li>
              <span>{cart.total_items}</span>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
