import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

import { Button, Table, IconButton, QuantityPicker } from '../../components';
import { useCart } from '../../context/cart_context';
import { printPrice } from '../../utils';
import { MaxWidth } from '../../containers';

function CartPage() {
  const {
    cartItems,
    onItemRemove,
    onQuantityChange,
    getCartTotal,
    getItemTotal,
  } = useCart();

  if (getCartTotal() === 0) {
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
          {cartItems.map((i) => (
            <tr key={i.id}>
              <td>
                <IconButton onClick={() => onItemRemove(i)}>
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
                    onIncrease={() => onQuantityChange(i, i.quantity + 1)}
                    onDecrease={() => onQuantityChange(i, i.quantity - 1)}
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
          <strong>Total: {printPrice(getCartTotal())}</strong>
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
