import { useDispatch, useSelector } from 'react-redux';

import { addProduct, removeProduct } from '../../slices/cart';
import { getCart } from '../../selectors';
import Button from '../Button/Button';

function AddToCart({ item }) {
  // ===========================================================================
  // Selectors
  // ===========================================================================

  const { items } = useSelector(getCart);

  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const dispatch = useDispatch();

  const _addProduct = (product) => dispatch(addProduct(product));
  const _removeProduct = (product) => dispatch(removeProduct(product));

  // ===========================================================================
  // Handlers
  // ===========================================================================

  const addProductHanlder = () => _addProduct(item);
  const removeProductHandler = () => _removeProduct(item);

  // ===========================================================================
  // Other
  // ===========================================================================

  const existingCartItem = items.findIndex((i) => i.id === item.id);
  const isItemInCart = existingCartItem !== -1;

  return isItemInCart ? (
    <Button type="danger" onClick={removeProductHandler}>
      Remove from cart
    </Button>
  ) : (
    <Button onClick={addProductHanlder}>Add to cart</Button>
  );
}

export default AddToCart;
