import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface CounterState {
  counter: any;
  value: number;
}

const initialState = {
  value: 0
} as CounterState;

export const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    addCartCount: state => {
      state.value += 1;
    },
    removeCartCount: state => {
      state.value -= 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

export const { addCartCount, removeCartCount, incrementByAmount } =
  cartSlice.actions;

export const selectCount = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
