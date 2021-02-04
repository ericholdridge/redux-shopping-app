import { commerce } from "../../../lib/commerce";

export const removeAllItems = (cartId) => {
  return async (dispatch) => {
    const response = await commerce.cart.empty(cartId);
    dispatch({
      type: "REMOVE_ALL_ITEMS",
      payload: response,
    });
  };
};
