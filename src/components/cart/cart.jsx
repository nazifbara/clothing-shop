import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { useCart } from '../../context/cart_context';
import { IconButton } from '../IconButton';

function Cart() {
  const history = useHistory();
  const { cartItems } = useCart();
  const isCartEmpty = cartItems.length === 0;

  return (
    <Container onClick={() => history.push('/cart')}>
      <IconButton>
        {!isCartEmpty && <Badge>{cartItems.length}</Badge>}
        <FiShoppingBag />
      </IconButton>
    </Container>
  );
}

const Badge = styled.span``;
const Container = styled.span`
  cursor: pointer;
  position: relative;

  ${Badge} {
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.app.cartBadge.contrast};
    background-color: ${({ theme }) => theme.app.cartBadge.background};
    padding-left: 0.156rem;
    padding-right: 0.156rem;
    border-radius: 50%;
    border: 0.063rem solid ${({ theme }) => theme.app.cartBadge.border};
    font-size: 0.75rem;
    font-weight: 700;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export default Cart;
