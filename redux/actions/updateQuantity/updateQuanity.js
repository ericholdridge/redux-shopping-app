import { commerce } from "../../../lib/commerce";

export const updateQuantity = (itemId, quantity) => {
  return async (dispatch) => {
    const response = await commerce.cart.update(itemId, { quantity });
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: response,
    });
  };
};
