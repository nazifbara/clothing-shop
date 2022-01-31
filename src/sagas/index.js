import { all, put, takeLatest, select } from 'redux-saga/effects';
import { API, Storage } from 'aws-amplify';

import { listProducts, getProduct } from '../api/queries';
import {
  addProduct,
  removeProduct,
  clearCart,
  changeQuantity,
} from '../slices/cart';
import { getCart } from '../selectors';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsError,
  loadProductSuccess,
  loadProductError,
  loadProduct,
} from '../slices/product';

// ===========================================================================
// Sagas
// ===========================================================================

function* saveCart() {
  const { items } = yield select(getCart);
  localStorage.setItem('cart', JSON.stringify(items));
}

function* fetchProducts() {
  try {
    const products = yield getProducts();
    yield put(loadProductsSuccess({ products }));
  } catch (error) {
    console.error({ fetchProducts: error });
    yield put(
      loadProductsError('Something went wrong... Please refresh the page')
    );
  }
}

function* fetchProduct({ payload }) {
  try {
    const product = yield _getProduct(payload.productId);
    yield put(loadProductSuccess({ product }));
  } catch (error) {
    console.error({ fetchProduct: error });
    yield put(
      loadProductError('Something went wrong... Please refresh the page')
    );
  }
}

// ===========================================================================
// Helpers
// ===========================================================================

const _getProduct = async (id) => {
  const data = await API.graphql({
    query: getProduct,
    variables: { id },
    authMode: 'API_KEY',
  });
  const {
    data: { getProduct: product },
  } = data;
  const signedProduct = (await signProducts([product]))[0];

  return signedProduct;
};

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
  yield all([
    takeLatest(
      [
        addProduct.type,
        removeProduct.type,
        clearCart.type,
        changeQuantity.type,
      ],
      saveCart
    ),
    takeLatest(loadProduct.type, fetchProduct),
    takeLatest(loadProducts.type, fetchProducts),
  ]);
}

export default rootSaga;
