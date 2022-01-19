import Dinero from 'dinero.js';
import { Auth } from 'aws-amplify';

export const getCartTotal = (items) => {
  return items.reduce((prev, i) => prev + getItemTotal(i), 0);
};

export const getItemTotal = (cartItem) => {
  return cartItem.price * cartItem.quantity;
};

export function printPrice(price) {
  const p = Dinero({ amount: price });
  if (p.hasSubUnits()) {
    return p.toFormat('$0,0.00');
  }
  return Dinero({ amount: price }).toFormat('$0,0');
}

export const currentUserIsAdmin = async (session) => {
  const userSession = await Auth.currentSession();
  return isAdmin(userSession);
};

export const isAdmin = (userSession) => {
  const {
    accessToken: {
      payload: { 'cognito:groups': groups },
    },
  } = userSession;

  if (!groups) return false;

  return groups.indexOf('Admin') !== -1;
};

export const getCents = (priceString) => {
  if (priceString.indexOf('.') !== -1) {
    return Number(priceString.replace('.', ''));
  }
  return Number(priceString) * 100;
};
