import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useCart } from '../../context/cart_context';

function Cart() {
  const history = useHistory();
  const { cartItems } = useCart();
  const isCartEmpty = cartItems.length === 0;

  return (
    <span className="cart" onClick={() => history.push('/cart')}>
      {!isCartEmpty && <span className="cart__badge">{cartItems.length}</span>}
      <FiShoppingCart />
    </span>
  );
}

export default Cart;
