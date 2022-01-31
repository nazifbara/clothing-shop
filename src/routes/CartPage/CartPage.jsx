import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import { getCart } from '../../selectors';
import { removeProduct, changeQuantity } from '../../slices/cart';
import { Button, Table, IconButton, QuantityPicker } from '../../components';
import { printPrice, getCartTotal, getItemTotal } from '../../utils/helpers';
import { MaxWidth } from '../../containers';

function CartPage() {
  // ===========================================================================
  // Selectors
  // ===========================================================================

  const { items } = useSelector(getCart);

  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const dispatch = useDispatch();

  const _removeProduct = (product) => dispatch(removeProduct(product));
  const _changeQuantity = (product, quantity) =>
    dispatch(changeQuantity({ product, quantity }));

  // ===========================================================================
  // Handlers
  // ===========================================================================

  const removeHanlder = (product) => () => _removeProduct(product);
  const quantityHandler = (product, quantity) => () =>
    _changeQuantity(product, quantity);

  // ===========================================================================
  // Other
  // ===========================================================================

  const cartTotal = getCartTotal(items);

  if (cartTotal === 0) {
    return (
      <MaxWidth>
        <h2>Your cart is currently empty.</h2>
        <div style={{ width: '200px', marginTop: '10px' }}>
          <Button>
            <Link to="/">Return To Shop</Link>
          </Button>
        </div>
      </MaxWidth>
    );
  }
  return (
    <MaxWidth>
      <h1>Shopping Cart</h1>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>
                <IconButton onClick={removeHanlder(i)}>
                  <FiX fontSize={30} />
                </IconButton>
              </td>
              <td>
                <span>{i.name}</span>
              </td>
              <td>{printPrice(i.price)}</td>
              <td>
                <div className="qty-picker">
                  <QuantityPicker
                    quantity={i.quantity}
                    onIncrease={quantityHandler(i, i.quantity + 1)}
                    onDecrease={quantityHandler(i, i.quantity - 1)}
                  />
                </div>
              </td>
              <td>{printPrice(getItemTotal(i))}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ margin: '15px 0', fontSize: '20px' }}>
        <p>
          <strong>Total: {printPrice(cartTotal)}</strong>
        </p>
      </div>
      <Button>
        <Link to="/checkout">Procced to checkout</Link>
      </Button>
    </MaxWidth>
  );
}

const route = {
  routeProps: {
    path: '/cart',
    component: CartPage,
  },
  name: 'CartPage',
};

export default route;
