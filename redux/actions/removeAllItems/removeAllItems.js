import { commerce } from "../../../lib/commerce";

export const removeAllItems = (lineItemId) => {
  return (dispatch) => {
    const response = commerce.cart.delete(lineItemId);
    console.log("Clicked");
    // dispatch({
    //   type: "REMOVE_ALL_ITEMS",
    //   payload: response,
    // });
  };
};
