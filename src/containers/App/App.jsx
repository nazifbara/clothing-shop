import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppBar } from '..';
import routes from '../../routes';
import { CartProvider } from '../../context/cart_context';
import { ContentBox } from '..';

function App() {
  return (
    <Router>
      <CartProvider>
        <AppBar />
        <ContentBox>
          <Switch>
            {routes.map((route) => (
              <Route {...route.routeProps} key={route.name} />
            ))}
          </Switch>
        </ContentBox>
      </CartProvider>
    </Router>
  );
}

export default App;
