import { all, put, takeLatest } from 'redux-saga/effects';
import { API, Storage } from 'aws-amplify';

import { listProducts } from '../api/queries';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsError,
} from '../slices/product';

// ===========================================================================
// Sagas
// ===========================================================================

function* fetchProducts() {
  try {
    const products = yield getProducts();
    yield put(loadProductsSuccess({ products }));
  } catch (error) {
    console.error({ fetchProducts: error.message });
    yield put(
      loadProductsError('Something went wrong... Please refresh the page')
    );
  }
}

// ===========================================================================
// Helpers
// ===========================================================================

const getProducts = async () => {
  const data = await API.graphql({
    query: listProducts,
    authMode: 'API_KEY',
  });
  const {
    data: {
      listProducts: { items },
    },
  } = data;
  const signedProducts = await signProducts(items);
  return signedProducts;
};

const signProducts = async (products) => {
  const signedProducts = await Promise.all(
    products.map(async (item) => {
      const signedUrl = await Storage.get(item.ProductImages.items[0].key);
      item.imageUrl = signedUrl;
      return item;
    })
  );

  return signedProducts;
};

// ===========================================================================
// Root
// ===========================================================================

function* rootSaga() {
  yield all([takeLatest(loadProducts.type, fetchProducts)]);
}

export default rootSaga;
