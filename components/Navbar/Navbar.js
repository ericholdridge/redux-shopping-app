import React from "react";
// Styles
import styles from "../../styles/navbar/navbar.module.scss";

const Navbar = () => {
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
          <div>
            <span>Shopping Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
