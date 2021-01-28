import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
// Styles
import styles from "../../styles/navbar/navbar.module.scss";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
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
              <span>{console.log(cartItems.total_items)}</span>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
