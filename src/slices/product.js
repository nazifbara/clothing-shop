import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: true,
  error: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loadProducts: (state) => {
      state.loading = true;
    },

    loadProductsError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    loadProductsSuccess: (state, { payload }) => {
      state.products = payload.products;
      state.loading = false;
    },
  },
});

export const { 
  loadProducts, 
  loadProductsError, 
  loadProductsSuccess 
} = productSlice.actions;

export default productSlice.reducer;
