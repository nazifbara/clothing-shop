import React from 'react';
import Image from 'react-graceful-image';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { printPrice } from '../../utils/helpers';
import ImageBox from '../ImageBox';

const ProductCard = ({ item }) => {
  return (
    <Container to={`/product/${item.id}`} key={item.id}>
      <ImageBox ratio="190/240">
        <Image alt="product" src={item.imageUrl} />
      </ImageBox>
      <span>{item.name}</span>
      <span>
        <strong>{printPrice(item.price)}</strong>
      </span>
    </Container>
  );
};

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0.9375rem;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.app.productCard.background};
  text-decoration: none;
  color: inherit;

  img {
    transition: transform 0.2s ease-out;
  }

  :hover {
    text-decoration: none;
    color: inherit;

    img {
      transform: scale(1.1);
    }
  }
`;

export default ProductCard;
