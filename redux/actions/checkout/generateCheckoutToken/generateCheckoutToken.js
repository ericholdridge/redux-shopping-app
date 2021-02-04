import { commerce } from "../../../../lib/commerce";

export const generateCheckoutToken = (cartId) => {
  return async (dispatch) => {
    const token = await commerce.checkout.generateToken(cartId, {
      type: "cart",
    });
    dispatch({
      type: "GENERATE_CHECKOUT_TOKEN",
      payload: token,
    });
  };
};
