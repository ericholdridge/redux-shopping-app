import { initialState } from "../../state/cartState";

export const fetchCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CART":
      return { ...state, cart: action.payload };
    case "UPDATE_QUANTITY":
      return { ...state, cart: action.payload.cart };
    case "REMOVE_ITEM":
      return { ...state, cart: action.payload.cart };
    default:
      return state;
  }
};
