import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  product: null,
  loading: true,
  error: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loadProduct: (state) => {
      state.product = null;
      state.loading = true;
    },

    loadProductError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    loadProductSuccess: (state, { payload }) => {
      state.product = payload.product;
      state.loading = false;
    },

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
  loadProduct,
  loadProductSuccess,
  loadProductError,
  loadProducts,
  loadProductsError,
  loadProductsSuccess,
} = productSlice.actions;

export default productSlice.reducer;
