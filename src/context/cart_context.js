import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider(props) {
  const initialState = JSON.parse(localStorage.getItem('cart')) || [];
  const [cartItems, setCartItems] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  function clearCart() {
    setCartItems([]);
  }

  function onItemAdd(cartItem) {
    const existingItemIndex = cartItems.findIndex((i) => i.id === cartItem.id);
    if (existingItemIndex !== -1) return;

    const newCartItems = [...cartItems, { ...cartItem, quantity: 1 }];
    setCartItems(newCartItems);
  }

  function onItemRemove(item) {
    const itemIndex = cartItems.findIndex((i) => i.id === item.id);
    const newCartItems = [
      ...cartItems.slice(0, itemIndex),
      ...cartItems.slice(itemIndex + 1),
    ];
    setCartItems(newCartItems);
  }

  function onQuantityChange(cartItem, quantity) {
    if (quantity === 0) {
      return;
    }

    const itemIndex = cartItems.findIndex((i) => i.id === cartItem.id);
    const newCartItems = [
      ...cartItems.slice(0, itemIndex),
      { ...cartItem, quantity },
      ...cartItems.slice(itemIndex + 1),
    ];
    setCartItems(newCartItems);
  }

  function getCartTotal() {
    return cartItems.reduce((prev, i) => prev + getItemTotal(i), 0);
  }

  function getItemTotal(cartItem) {
    return cartItem.price * cartItem.quantity;
  }

  return (
    <CartContext.Provider
      {...props}
      value={{
        cartItems,
        onItemAdd,
        onItemRemove,
        onQuantityChange,
        getCartTotal,
        getItemTotal,
        clearCart,
      }}
    />
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider.');
  }
  return context;
}
