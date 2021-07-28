import { Link } from 'react-router-dom';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import Button from '../../components/button';
import { useCart } from '../../context/cart_context';
import { printPrice } from '../../utils';

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
      <div className="container">
        <h2>Your cart is currently empty.</h2>
        <div style={{ width: '200px', marginTop: '10px' }}>
          <Button>
            <Link to="/">Return To Shop</Link>
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((i) => (
            <tr key={i.id}>
              <td>
                <span>{i.title}</span>
                <button onClick={() => onItemRemove(i)} className="remove-btn">
                  remove
                </button>
              </td>
              <td>{printPrice(i.price)}</td>
              <td>
                <div className="qty-picker">
                  <FiPlusCircle
                    onClick={() => onQuantityChange(i, i.quantity + 1)}
                    className="qty-picker__btn"
                  />
                  <span>{i.quantity}</span>
                  <FiMinusCircle
                    onClick={() => onQuantityChange(i, i.quantity - 1)}
                    className="qty-picker__btn"
                  />
                </div>
              </td>
              <td>{printPrice(getItemTotal(i))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ margin: '15px 0', fontSize: '20px' }}>
        <p>
          <strong>Total: {printPrice(getCartTotal())}</strong>
        </p>
      </div>
      <Button>
        <Link to="/checkout">Procced to checkout</Link>
      </Button>
    </div>
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
