import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
  value: 0,
};
const addToCart = createSlice({
  name: "cart",
  initialState: initialSate,
  reducers: {
    additem: (state) => {
      state.value += 1;
    },
    removeitem: (state) => {
      state.value > 0 ? (state.value -= 1) : null;
    },
    clearitem: (state) => {
      state.value = 0;
    },
  },
});
export const { additem, removeitem, clearitem } = addToCart.actions;
export default addToCart.reducer;
