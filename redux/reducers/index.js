import { combineReducers } from "redux";
import { fetchProductsReducer } from "./productsReducer/productsReducer";
import { fetchCartReducer } from "./cartReducer/cartReducer";

const rootReducer = combineReducers({
  products: fetchProductsReducer,
  cart: fetchCartReducer,
});

export default rootReducer;
