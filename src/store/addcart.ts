/* eslint-disable prefer-const */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface CounterState {
  cartItem: {
    cartQuantity: number;
    id: number;
    brand: string;
    createdAt: string;
    description: string;
    name: string;
    photo: string;
    price: string;
    updatedAt: string;
  }[];
  cartTotalAmount: number;
  cartTotalQuantity: number;
}

const initialState: CounterState = {
  cartItem: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0
};

export const addcartSlice = createSlice({
  name: "addcart",
  initialState,
  reducers: {
    addCartItem: (state: CounterState, action) => {
      const itemIndex = state.cartItem.findIndex(
        item => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.info(
          `Adicionado mais ${state.cartItem[itemIndex].name} ao carrinho`,
          {
            position: "bottom-left"
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
        toast.success(`Adicionado ${action.payload.name} ao carrinho`, {
          position: "bottom-left"
        });
      }

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    removeCartItem: (state: CounterState, action) => {
      const nextCartItems = state.cartItem.filter(
        cartItem => cartItem.id !== action.payload.id
      );

      state.cartItem = nextCartItems;

      toast.error(`${action.payload.name} removido do carrinho`, {
        position: "bottom-left"
      });
    },
    decreaseCartItem: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        item => item.id === action.payload.id
      );

      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;

        toast.info(`Reduzido o a quantidade do ${action.payload.name}`, {
          position: "bottom-left"
        });
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItem.filter(
          item => item.id !== action.payload.id
        );

        state.cartItem = nextCartItems;

        toast.error(`${action.payload.name} removido do carrinho`, {
          position: "bottom-left"
        });
      }
    },
    getTotals(state) {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = Number(price) * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
  }
});

export const { addCartItem, removeCartItem, decreaseCartItem, getTotals } =
  addcartSlice.actions;

export default addcartSlice.reducer;
