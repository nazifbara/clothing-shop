import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { ProductList, ProductCard, Message } from '../../components';
import { useAsync } from '../../hooks';
import { listProducts } from '../../graphql/queries';
import { MaxWidth } from '../../containers';

function HomePage() {
  const { status, data, run } = useAsync();
  useEffect(() => {
    run(fetchGames());
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

async function fetchGames() {
  const data = await API.graphql({ query: listProducts, authMode: 'API_KEY' });
  const {
    data: {
      listProducts: { items },
    },
  } = data;
  const signedGames = await getSignedGames(items);
  return signedGames;
}

async function getSignedGames(games) {
  const signedGames = await Promise.all(
    games.map(async (item) => {
      const signedUrl = await Storage.get(item.image);
      item.imageUrl = signedUrl;
      return item;
    })
  );
  return signedGames;
}

const route = {
  routeProps: {
    path: '/',
    component: HomePage,
  },
  name: 'HomePage',
};

export default route;
