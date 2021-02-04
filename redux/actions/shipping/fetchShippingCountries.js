import { commerce } from "../../../lib/commerce";

export const fetchShippingCountries = (checkoutTokenId) => {
  return async (dispatch) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    dispatch({
      type: "FETCH_SHIPPING_COUNTRIES",
      payload: countries,
    });
  };
};
