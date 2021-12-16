import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import Image from 'react-graceful-image';
import styled from 'styled-components';

import { useAsync } from '../../hooks';
import { getProduct } from '../../graphql/queries';
import { printPrice } from '../../utils';
import AddToCart from '../../components/add_to_cart';
import ImageBox from '../../components/ImageBox';
import breakpoint from '../../styles/breakpoints';

function ProductDetailPage() {
  const { data: product, run, status } = useAsync();
  const { productId } = useParams();
  const isLoading = status === 'pending';
  const isResolved = status === 'resolved';

  useEffect(() => {
    run(fetchProduct(productId));
  }, [run, productId]);

  return (
    <>
      {isLoading && <span>loading...</span>}
      {isResolved && (
        <ProductDetail>
          <ProductImage>
            <Image src={product.imageURL} alt={`${product.name} cover`} />
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
  height: 60vh;
  padding: 1rem 0;
  width: 100%;
  background-color: ${({ theme }) => theme.app.productImage.background};

  @media ${breakpoint.device.md} {
    height: 90vh;
    width: 60%;
  }
`;

const ProductInfo = styled.div`
  width: 40%;
  padding: 0;
  width: 100%;
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

async function fetchProduct(id) {
  const data = await API.graphql({
    ...graphqlOperation(getProduct, { id }),
    authMode: 'API_KEY',
  });
  const {
    data: { getProduct: product },
  } = data;

  const signedImageURL = await Storage.get(product.image);
  product.imageURL = signedImageURL;

  return product;
}

const route = {
  routeProps: {
    path: '/product/:productId',
    component: ProductDetailPage,
  },
  name: 'ProductDetailPage',
};

export default route;
