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

export const counterSlice = createSlice({
  name: "counter",

  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
