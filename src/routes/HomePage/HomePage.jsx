import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { ProductList, ProductCard, Message } from '../../components';
import { useAsync } from '../../hooks';
import { listProducts } from '../../api/queries';
import { MaxWidth } from '../../containers';

function HomePage() {
  const { status, data, run } = useAsync();
  useEffect(() => {
    run(fetchProducts());
  }, [run]);

  return (
    <MaxWidth>
      {status === 'rejected' && (
        <Message type="danger">
          Something went wrong. Please refresh the page.
        </Message>
      )}
      {status === 'pending' && <span>Loading...</span>}
      {status === 'resolved' && (
        <ProductList list={data}>
          {(item) => <ProductCard key={item.id} item={item} />}
        </ProductList>
      )}
    </MaxWidth>
  );
}

async function fetchProducts() {
  const data = await API.graphql({
    query: listProducts,
    authMode: 'API_KEY',
  });
  const {
    data: {
      listProducts: { items },
    },
  } = data;
  const signedProducts = await getSignedProducts(items);
  return signedProducts;
}

async function getSignedProducts(products) {
  const signedProducts = await Promise.all(
    products.map(async (item) => {
      const signedUrl = await Storage.get(item.ProductImages.items[0].key);
      item.imageUrl = signedUrl;
      return item;
    })
  );

  return signedProducts;
}

const route = {
  routeProps: {
    path: '/',
    component: HomePage,
  },
  name: 'HomePage',
};

export default route;
