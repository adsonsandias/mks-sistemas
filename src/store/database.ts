import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { API_PRODUCTS } from "../services/Api";

export const fetchProducts = createAsyncThunk(
  "database/fetchProducts",
  async () => {
    try {
      const api: string = API_PRODUCTS;
      const data = await fetch(api);
      const { count, products } = await data.json();
      return await products;
    } catch (error) {
      return error;
    }
  }
);

interface DataState {
  database: any;
  loading: boolean;
  data: [];
  error: string | undefined;
}

const initialState = {
  loading: true,
  data: [],
  error: ""
} as unknown as DataState;

const dataSlice = createSlice({
  name: "database",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state: DataState) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state: DataState, action: PayloadAction<[]>) => {
        state.loading = false;
        if (action.payload.length > 0) {
          localStorage.setItem("database", JSON.stringify(action.payload));
          state.data = action.payload;
        }
        state.error = "";
      }
    );
    builder.addCase(fetchProducts.rejected, (state: DataState, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default dataSlice.reducer;
