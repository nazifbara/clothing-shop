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

import useAsync from '../../hooks/use_async';
import { useCart } from '../../context/cart_context';
import Button from '../../components/Button';
import Message from '../../components/message';
import { printPrice } from '../../utils';

const processOrder = {}; // TODO

function CheckoutPage() {
  const { cartItems, getCartTotal, getItemTotal } = useCart();
  const [stripePromise] = useState(() =>
    loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
  );

  return (
    <div className="container">
      <h2>Checkout</h2>
      <div className="checkout">
        <div style={{ marginBottom: '40px' }}>
          <table>
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
                  <td>{i.title}</td>
                  <td>{printPrice(getItemTotal(i))}</td>
                  <td>{i.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <span>Total : {printPrice(getCartTotal())}</span>
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <InjectedCheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}

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
    await API.graphql(
      graphqlOperation(processOrder, {
        input: {
          cart: cartItems,
          token: result.token.id,
          total: getCartTotal(),
          ...form,
        },
      })
    );
    clearCart();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="country">Country </label>
        <input
          value={form.country}
          onChange={handlInputChange}
          className="input"
          required
          name="country"
          id="country"
        />
      </div>
      <div className="field">
        <label htmlFor="city">City </label>
        <input
          value={form.city}
          onChange={handlInputChange}
          className="input"
          name="city"
          id="city"
        />
      </div>
      <div className="field">
        <label htmlFor="zipCode">ZIP-CODE </label>
        <input
          value={form.zipCode}
          onChange={handlInputChange}
          className="input"
          name="zipCode"
          id="zipCode"
        />
      </div>
      <div className="field">
        <label htmlFor="address">Address </label>
        <input
          value={form.address}
          onChange={handlInputChange}
          className="input"
          required
          name="address"
          id="address"
        />
      </div>
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
                backgroundColor: '#0d1b2a',
                color: '#edf2f4',
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
      {/* {status === 'resolved' && (
        <Message type="success">Successfully ordered</Message>
      )} */}
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
