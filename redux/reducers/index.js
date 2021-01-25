import { combineReducers } from "redux";
import { fetchProductsReducer } from "./productsReducer/productsReducer";
import { fetchCartReducer } from "./cartReducer/cartReducer";

export default combineReducers({
  products: fetchProductsReducer,
  cart: fetchCartReducer,
});
