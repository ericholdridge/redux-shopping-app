import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/actions/fetchCart/fetchCart";
import { updateQuantity } from "../../redux/actions/updateQuantity/updateQuanity";

// Styles
import styles from "../../styles/cart/cart.module.scss";

const cart = () => {
  const {cart} = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);


  return (
    <div className={`container ${styles.container}`}>
      {cart?.line_items?.map((item) => (
        <div key={item.id} className={styles.cartCard}>
          <div className={styles.itemPrice}>
            <h1>{item.name}</h1>
            <span>{item.price.formatted_with_symbol}</span>
          </div>
          <div className={styles.cartQuantity}>
            <span
              onClick={() =>
                dispatch(updateQuantity(item.id, item.quantity - 1))
              }
            >
              -
            </span>
            <p>{item.quantity}</p>
            <span
              onClick={() =>
                dispatch(updateQuantity(item.id, item.quantity + 1))
              }
            >
              +
            </span>
          </div>
          <button>Remove Item</button>
        </div>
      ))}
    </div>
  );
};

export default cart;
