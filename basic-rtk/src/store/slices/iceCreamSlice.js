import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "./cakeSlice";

const initialState = {
  numberOfIceCream: 10,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCream--;
    },
    restocked: (state, action) => {
      state.numberOfIceCream = state.numberOfIceCream + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numberOfIceCream--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
