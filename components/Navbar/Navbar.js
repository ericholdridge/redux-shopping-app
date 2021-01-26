import React from "react";
import { useSelector } from "react-redux";
// Styles
import styles from "../../styles/navbar/navbar.module.scss";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <h1>ReduxShoppingApp</h1>
        <div>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
          </ul>
          <div className={styles.cartItems}>
            <span>Shopping Cart</span>
            <span>{cartItems.total_items}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
