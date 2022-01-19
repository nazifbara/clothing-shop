import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { Hub, Auth } from 'aws-amplify';
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import './stripe-card.css';

import { clearCart } from '../../slices/cart';
import { getCart } from '../../selectors';
import { processOrder } from '../../api/mutations';
import useAsync from '../../hooks/use_async';
import { Button, Message, Table, TextField } from '../../components';
import { MaxWidth } from '../../containers';
import { printPrice, getCartTotal, getItemTotal } from '../../utils/helpers';
import breakpoints from '../../styles/breakpoints';

function CheckoutPage() {
  // ===========================================================================
  // Selectors
  // ===========================================================================

  const { items } = useSelector(getCart);

  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const dispatch = useDispatch();

  const _clearCart = () => dispatch(clearCart());

  // ===========================================================================
  // Other
  // ===========================================================================

  const cartTotal = getCartTotal(items);

  const [stripePromise] = useState(() =>
    loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          setIsAuthenticated(true);
          break;
        case 'signOut':
          setIsAuthenticated(false);
          break;
        default:
          break;
      }
    });
    Auth.currentAuthenticatedUser()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));

    return () => {
      Hub.remove('auth');
    };
  }, []);

  return (
    <MaxWidth>
      {!isAuthenticated && (
        <div style={{ textAlign: 'center', color: 'greenyellow' }}>
          <div style={{ color: 'orangered' }}>Use Test User</div>
          <div>username: elonmusk</div>
          <div>password: VjIURjjd$jS9</div>
        </div>
      )}
      <Authenticator initialState="signIn">
        {() => (
          <>
            <h1>Checkout</h1>
            <CheckoutContainer>
              <div>
                <Table>
                  <thead>
                    <tr>
                      <th>Game</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((i) => (
                      <tr key={i.id}>
                        <td>{i.name}</td>
                        <td>{printPrice(getItemTotal(i))}</td>
                        <td>{i.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <span>Total : {printPrice(cartTotal)}</span>
              </div>
              <div>
                <Elements stripe={stripePromise}>
                  <InjectedCheckoutForm
                    cartItems={items}
                    cartTotal={cartTotal}
                    clearCart={_clearCart}
                  />
                </Elements>
              </div>
            </CheckoutContainer>
          </>
        )}
      </Authenticator>
    </MaxWidth>
  );
}

const CheckoutContainer = styled.div`
  @media ${breakpoints.device.md} {
    & {
      display: flex;
      align-items: flex-start;
      margin: 0.625rem 0.625rem;
    }

    & > div {
      width: 50%;
      padding: 1.5rem 0.625rem;
    }
  }
`;

function CheckoutForm({ stripe, elements, cartItems, cartTotal, clearCart }) {
  // ===========================================================================
  // State
  // ===========================================================================

  const history = useHistory();
  const { status, run, error } = useAsync();
  const [form, setForm] = useState(initialFormState);

  if (error) {
    console.error(error);
  }

  // ===========================================================================
  // Hooks
  // ===========================================================================

  useEffect(() => {
    if (status === 'resolved') {
      history.push('/order-success');
    }
  }, [status, history]);

  // ===========================================================================
  // Handlers
  // ===========================================================================

  function handleSubmit(e) {
    const { address, country } = form;
    e.preventDefault();
    if (!stripe && !elements && !address && !country) {
      return;
    }
    run(process());
  }

  function handleInputChange({ target: { name, value } }) {
    setForm((f) => ({
      ...form,
      [name]: value,
    }));
  }

  // ===========================================================================
  // Other
  // ===========================================================================

  async function process() {
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    await API.graphql({
      ...graphqlOperation(processOrder, {
        input: {
          cart: cartItems,
          token: result.token.id,
          total: cartTotal,
          ...form,
        },
      }),
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    clearCart();
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        labelText="Country"
        value={form.country}
        onChange={handleInputChange}
        required
        name="country"
        id="country"
      />

      <TextField
        labelText="City"
        value={form.city}
        onChange={handleInputChange}
        required
        name="city"
        id="city"
      />
      <TextField
        labelText="Zip Code"
        value={form.zipCode}
        onChange={handleInputChange}
        required
        name="zipCode"
        id="zipCode"
      />
      <TextField
        labelText="Address"
        value={form.address}
        onChange={handleInputChange}
        required
        name="address"
        id="address"
      />
      <p style={{ color: 'green', marginBottom: '10px' }}>
        Enter 4242424242424242 - 08/30 - 123 - 12345
      </p>
      <div className="field">
        <label htmlFor="card">Card</label>
        <CardElement
          className="input"
          options={{
            style: {
              base: {
                backgroundColor: '#4b4965',
                color: '#fff',
              },
            },
          }}
        />
      </div>
      <Button>{status === 'pending' ? 'processing...' : 'Buy'}</Button>
      {status === 'rejected' && (
        <Message type="danger">
          Something went wrong. Please refresh the page and try again
        </Message>
      )}
    </form>
  );
}

function InjectedCheckoutForm(props) {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} {...props} />
      )}
    </ElementsConsumer>
  );
}

const initialFormState = {
  country: '',
  city: '',
  zipCode: '',
  address: '',
};

const route = {
  routeProps: {
    path: '/checkout',
    component: CheckoutPage,
  },
  name: 'CheckoutPage',
};

export default route;
