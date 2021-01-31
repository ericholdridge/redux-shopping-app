import { commerce } from "../../../lib/commerce";

export const removeItem = (cartId) => {
  return async (dispatch) => {
    const response = await commerce.cart.remove(cartId);
    dispatch({
      type: "REMOVE_ITEM",
      payload: response,
    });
  };
};
