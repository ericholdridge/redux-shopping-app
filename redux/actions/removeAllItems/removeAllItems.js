import { commerce } from "../../../lib/commerce";

export const removeAllItems = () => {
  return async (dispatch) => {
    const response = await commerce.cart.empty();
    dispatch({
      type: "REMOVE_ALL_ITEMS",
      payload: response,
    });
  };
};
