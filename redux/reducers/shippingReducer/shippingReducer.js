import { shippingState } from "../../state/shippingState";

export const shippingReducer = (state = shippingState, action) => {
  switch (action.type) {
    case "FETCH_SHIPPING_COUNTRIES":
      return {
        ...state,
        shippingCountries: action.payload,
        shippingCountry: Object.keys(action.payload)[0],
      };
    case "FETCH_SHIPPING_SUBDIVISIONS":
      return {
        ...state,
        shippingSubdivisions: action.payload,
        shippingSubdivision: Object.keys(action.payload)[0],
      };

    case "UPDATE_SHIPPING_COUNTRY":
      return {
        ...state,
        shippingCountry: action.payload,
      };
    default:
      return state;
  }
};
