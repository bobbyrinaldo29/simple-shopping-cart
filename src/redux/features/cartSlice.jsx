import { createSlice } from "@reduxjs/toolkit";
import listCart from "../../libs/listCart.json";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: listCart,
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    getCartTotal: (state) => {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = Number(totalAmount).toFixed(2);
      state.totalCount = totalCount;
    },
    increment: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrement: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      }).filter((item) => item.amount !== 0);
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { getCartTotal, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
