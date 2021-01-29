import { products } from "../../state/productsState";

export const fetchProductsReducer = (state = products, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: action.payload.data};
    default:
      return state;
  }
};
