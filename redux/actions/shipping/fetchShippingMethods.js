import { commerce } from "../../../lib/commerce";

export const fetchShippingMethods = (token, country, region = null) => {
  return async (dispatch) => {
    const options = await commerce.checkout.getShippingOptions(token, {
      country,
      region,
    });
    dispatch({
      type: "FETCH_SHIPPING_METHODS",
      payload: options,
    });
  };
};
