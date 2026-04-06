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
  },
});
export const { additem } = addToCart.actions;
export default addToCart.reducer;
