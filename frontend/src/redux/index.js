import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide";

export const store = configureStore({
  // to create a store that has two reducers, one for users and one for products.

  reducer: {
    user: userSliceReducer,
    product: productSlideReducer,
  },
});
