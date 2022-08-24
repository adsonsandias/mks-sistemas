import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  cartItem: object[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
} as initialStateProps;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: initialStateProps, actions) {
      state.cartItem.push(actions.payload);
    }
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
