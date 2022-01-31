import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const { id, name, price } = payload;
      const existingItemIndex = state.items.findIndex((i) => i.id === id);

      if (existingItemIndex !== -1) return;

      state.items.push({ id, name, price, quantity: 1 });
    },

    removeProduct: (state, { payload }) => {
      const itemIndex = state.items.findIndex((i) => i.id === payload.id);
      const newItems = [
        ...state.items.slice(0, itemIndex),
        ...state.items.slice(itemIndex + 1),
      ];

      state.items = newItems;
    },

    changeQuantity: (state, { payload: { product, quantity } }) => {
      if (quantity === 0) {
        return;
      }

      const itemIndex = state.items.findIndex((i) => i.id === product.id);
      state.items[itemIndex].quantity = quantity;
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addProduct, removeProduct, changeQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
