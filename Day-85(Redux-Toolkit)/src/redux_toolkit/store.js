import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice.js";
import productReducer from "./productSlice.js";
import Product from "../Product.jsx";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    Products: productReducer,
  },
});
export default store;
