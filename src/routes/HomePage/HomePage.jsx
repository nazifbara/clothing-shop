import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../selectors';
import { loadProducts } from '../../slices/product';
import { ProductList, ProductCard, Message } from '../../components';
import { MaxWidth } from '../../containers';

function HomePage() {
  // ===========================================================================
  // Selectors
  // ===========================================================================

  const { products, loading, error } = useSelector(getProducts);

  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const dispatch = useDispatch();

  const _loadProducts = () => dispatch(loadProducts());

  // ===========================================================================
  // Hooks
  // ===========================================================================

  useEffect(() => {
    _loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MaxWidth>
      {error && <Message type="danger">{error}</Message>}
      {loading && <span>Loading...</span>}

      <ProductList list={products}>
        {(item) => <ProductCard key={item.id} item={item} />}
      </ProductList>
    </MaxWidth>
  );
}

const route = {
  routeProps: {
    path: '/',
    component: HomePage,
  },
  name: 'HomePage',
};

export default route;
