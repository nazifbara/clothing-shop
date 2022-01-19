import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-graceful-image';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../selectors';
import { loadProduct } from '../../slices/product';
import { printPrice } from '../../utils/helpers';
import { AddToCart, ImageBox, Message } from '../../components/';
import breakpoint from '../../styles/breakpoints';

function ProductDetailPage() {
  // ===========================================================================
  // Selectors
  // ===========================================================================

  const { product, loading, error } = useSelector(getProducts);

  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const dispatch = useDispatch();

  const _loadProduct = (productId) => dispatch(loadProduct({ productId }));

  // ===========================================================================
  // State
  // ===========================================================================

  const { productId } = useParams();

  // ===========================================================================
  // Hooks
  // ===========================================================================

  useEffect(() => {
    _loadProduct(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <>
      {error && <Message type="danger">{error}</Message>}
      {loading && <span>loading...</span>}

      {product && (
        <ProductDetail>
          <ProductImage>
            <Image src={product.imageUrl} alt={`${product.name} cover`} />
          </ProductImage>
          <ProductInfo>
            <h2>{product.name}</h2>

            <ProductPrice>{printPrice(product.price)}</ProductPrice>
            <AddToCart item={product} />
            <p>{product.description}</p>
          </ProductInfo>
        </ProductDetail>
      )}
    </>
  );
}

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${breakpoint.device.md} {
    flex-direction: row;
  }
`;

const ProductImage = styled(ImageBox)`
  height: 40vh;
  padding: 1rem 0;
  width: 100%;
  background-color: ${({ theme }) => theme.app.productImage.background};

  @media ${breakpoint.device.md} {
    width: 60%;
  }

  @media ${breakpoint.device.md} {
    height: 60vh;
  }

  @media ${breakpoint.device.lg} {
    height: 90vh;
  }
`;

const ProductInfo = styled.div`
  width: 40%;
  padding: 0;
  width: 100%;
  white-space: pre-wrap;
  margin-top: 1.2rem;

  > * {
    margin-bottom: 1.5rem;
  }

  @media ${breakpoint.device.md} {
    margin-top: 0;
    padding-left: 1.5rem;
    width: 40%;
  }
`;

const ProductPrice = styled.span`
  font-weight: 700;
  font-size: 1.75rem;
`;

const route = {
  routeProps: {
    path: '/product/:productId',
    component: ProductDetailPage,
  },
  name: 'ProductDetailPage',
};

export default route;
