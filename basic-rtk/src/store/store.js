import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "./slices/cakeSlice";
import iceCreamSlice from "./slices/iceCreamSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceCreamSlice,
    user: userSlice,
  },
});

export default store;
