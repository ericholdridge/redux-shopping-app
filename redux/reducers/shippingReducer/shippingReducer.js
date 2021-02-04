import { shippingState } from "../../state/shippingState";

export const shippingReducer = (state = shippingState, action) => {
  switch (action.type) {
    case "FETCH_SHIPPING_COUNTRIES":
      return { ...state, shipping: action.payload };
    default:
      return state;
  }
};
