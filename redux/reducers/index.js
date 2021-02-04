import { combineReducers } from "redux";
import { fetchProductsReducer } from "./productsReducer/productsReducer";
import { fetchCartReducer } from "./cartReducer/cartReducer";
import { shippingReducer } from "./shippingReducer/shippingReducer";

const rootReducer = combineReducers({
  products: fetchProductsReducer,
  cart: fetchCartReducer,
  shipping: shippingReducer,
});

export default rootReducer;
