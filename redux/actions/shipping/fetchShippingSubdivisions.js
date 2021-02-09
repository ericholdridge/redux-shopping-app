import { commerce } from "../../../lib/commerce";

export const fetchShippingSubdivisions = (countryCode) => {
  return async (dispatch) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    dispatch({
      type: "FETCH_SHIPPING_SUBDIVISIONS",
      payload: subdivisions,
    });
  };
};
