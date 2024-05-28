import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    increaseProductQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload
      );
      if (product) {
        product.quantity += 1;
        state.total += product.price;
      }
    },
    decreaseProductQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        if (product.quantity > 1) {
          product.quantity -= 1;
          state.total -= product.price;
        } else {
          state.products.splice(productIndex, 1);
          state.total -= product.price;
        }
        state.quantity -= 1;
      }
    },
  },
});

export const { addProduct, increaseProductQuantity, decreaseProductQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
