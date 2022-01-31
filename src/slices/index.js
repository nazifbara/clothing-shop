import { combineReducers } from 'redux';

import cartReducer from './cart';
import productReducer from './product';

const rootReducer = combineReducers({
  cartState: cartReducer,
  productState: productReducer,
});

export default rootReducer;
