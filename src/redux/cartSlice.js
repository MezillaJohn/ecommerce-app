import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //check item exist in the cart
      const existingCartItem = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (existingCartItem) {
        existingCartItem.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItemFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
