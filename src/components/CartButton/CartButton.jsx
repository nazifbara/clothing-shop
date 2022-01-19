import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { getCart } from '../../selectors';
import { IconButton } from '..';

function CartButton() {
  // ===========================================================================
  // Selectors
  // ===========================================================================

  const { items } = useSelector(getCart);

  // ===========================================================================
  // Handlers
  // ===========================================================================

  const clickHandler = () => history.push('/cart');

  // ===========================================================================
  // State
  // ===========================================================================

  const history = useHistory();

  // ===========================================================================
  // Other
  // ===========================================================================

  const cartSize = items.length;
  const isCartEmpty = cartSize === 0;

  return (
    <Container onClick={clickHandler}>
      <IconButton>
        {!isCartEmpty && <Badge>{cartSize}</Badge>}
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

export default CartButton;
