import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import './stripe-card.css';

import { processOrder } from '../../api/mutations';
import useAsync from '../../hooks/use_async';
import { useCart } from '../../context/cart_context';
import { Button, Message, Table, TextField } from '../../components';
import { MaxWidth } from '../../containers';
import { printPrice } from '../../utils';
import breakpoints from '../../styles/breakpoints';

function CheckoutPage() {
  const { cartItems, getCartTotal, getItemTotal } = useCart();
  const [stripePromise] = useState(() =>
    loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
  );

  return (
    <MaxWidth>
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
              {cartItems.map((i) => (
                <tr key={i.id}>
                  <td>{i.name}</td>
                  <td>{printPrice(getItemTotal(i))}</td>
                  <td>{i.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <span>Total : {printPrice(getCartTotal())}</span>
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <InjectedCheckoutForm />
          </Elements>
        </div>
      </CheckoutContainer>
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

function CheckoutForm({ stripe, elements }) {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const history = useHistory();
  const { status, run, error } = useAsync();
  const [form, setForm] = useState(initialFormState);

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (status === 'resolved') {
      history.push('/order-success');
    }
  }, [status, history]);

  function handleSubmit(e) {
    const { address, country } = form;
    e.preventDefault();
    if (!stripe && !elements && !address && !country) {
      return;
    }
    run(process());
  }

  function handlInputChange({ target: { name, value } }) {
    setForm((f) => ({
      ...form,
      [name]: value,
    }));
  }

  async function process() {
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    await API.graphql({
      ...graphqlOperation(processOrder, {
        input: {
          cart: cartItems,
          token: result.token.id,
          total: getCartTotal(),
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
        onChange={handlInputChange}
        required
        name="country"
        id="country"
      />

      <TextField
        labelText="City"
        value={form.city}
        onChange={handlInputChange}
        required
        name="city"
        id="city"
      />
      <TextField
        labelText="Zip Code"
        value={form.zipCode}
        onChange={handlInputChange}
        required
        name="zipCode"
        id="zipCode"
      />
      <TextField
        labelText="Address"
        value={form.address}
        onChange={handlInputChange}
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

function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
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
    component: withAuthenticator(CheckoutPage),
  },
  name: 'CheckoutPage',
};

export default route;
