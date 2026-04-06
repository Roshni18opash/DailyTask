import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const jsonResp = await resp.json();
  return jsonResp.products;
});
const initialState = {
  item: [],
  status: undefined,
  error: null,
};
const productSlice = createSlice({
  name: "productsSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
  },
});
export default productSlice.reducer;
