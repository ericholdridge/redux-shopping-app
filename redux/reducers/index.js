import { combineReducers } from "redux";
import { fetchProductsReducer } from "./productsReducer/productsReducer";
import { fetchCartReducer } from "./cartReducer/cartReducer";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products', 'cart']
}

const rootReducer = combineReducers({
  products: fetchProductsReducer,
  cart: fetchCartReducer,
});



export default persistReducer(persistConfig, rootReducer);
