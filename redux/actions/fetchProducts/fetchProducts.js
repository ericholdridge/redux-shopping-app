import { commerce } from "../../../lib/commerce";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await commerce.products.list();
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: response
    });
  };
};
