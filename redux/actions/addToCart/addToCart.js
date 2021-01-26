import { commerce } from "../../../lib/commerce";

export const addToCart = (productId, quantity) => {
  return async (dispatch) => {
    const response = await commerce.cart.add(productId, quantity);
    dispatch({
      type: "ADD_TO_CART",
      payload: response,
    });
  };
};
