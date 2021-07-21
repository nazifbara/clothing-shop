import React from 'react';
import CartIcon from './cart_icon.jsx';
import { useHistory } from 'react-router-dom';
import { useCart } from '../../context/cart_context';

function Cart() {
  const history = useHistory();
  const { cartItems } = useCart();
  const isCartEmpty = cartItems.length === 0;

  return (
    <span className="cart" onClick={() => history.push('/cart')}>
      {!isCartEmpty && <span className="cart__badge">{cartItems.length}</span>}
      <CartIcon />
    </span>
  );
}

export default Cart;
