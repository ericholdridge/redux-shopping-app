import { cart } from "../../state/cartState";

export const fetchCartReducer = (state = cart, action) => {
  switch (action.type) {
    case "FETCH_CART":
      console.log(action.payload);
      return action.payload
    default:
      return state;
  }
};
