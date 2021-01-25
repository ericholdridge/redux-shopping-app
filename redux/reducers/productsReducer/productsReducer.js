import { products } from "../../state/productsState";

export const fetchProductsReducer = (state = products, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};
