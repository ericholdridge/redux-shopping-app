import { commerce } from "../../../lib/commerce";

export const fetchCart = () => {
  return async (dispatch) => {
    const response = await commerce.cart.retrieve();
    dispatch({
      type: "FETCH_CART",
      payload: response,
    });
  };
};
