import React, { createContext, useContext, useState, useEffect } from 'react';

// Initial template data
const templates = [
  {
    id: 1,
    name: 'Classic',
    cost: 0,
    exampleText: 'Clean white text, no style',
    type: 'Free',
  },
  {
    id: 2,
    name: 'Backdrop',
    cost: 200,
    exampleText: 'White on dark semi-transparent',
    type: 'Premium',
  },
  {
    id: 3,
    name: 'Highlight',
    cost: 300,
    exampleText: 'Black on yellow highlight',
    type: 'Premium',
  },
  {
    id: 4,
    name: 'Glow',
    cost: 250,
    exampleText: 'Neon glow subtitle text',
    type: 'Premium',
  },
  {
    id: 5,
    name: 'Mono',
    cost: 100,
    exampleText: 'Monospaced typewriter style',
    type: 'Premium',
  },
];

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [purchased, setPurchased] = useState([]);
  const [credits, setCredits] = useState(500);
  const [toast, setToast] = useState(null);

  // Removed localStorage persistence of purchased templates as per user request

  const addToCart = (template) => {
    if (cart.find((item) => item.id === template.id) || purchased.find((item) => item.id === template.id)) {
      setToast({ type: 'info', message: 'Template already in cart or purchased' });
      return;
    }
    setCart([...cart, template]);
    setToast({ type: 'success', message: `${template.name} added to cart` });
  };

  const removeFromCart = (templateId) => {
    setCart(cart.filter((item) => item.id !== templateId));
    setToast({ type: 'info', message: 'Template removed from cart' });
  };

  const checkout = () => {
    const totalCost = cart.reduce((sum, item) => sum + item.cost, 0);
    if (totalCost > credits) {
      setToast({ type: 'error', message: 'Insufficient credits' });
      return;
    }
    setCredits(credits - totalCost);
    setPurchased([...purchased, ...cart]);
    setCart([]);
    setToast({ type: 'success', message: `Purchase successful! Remaining credits: ${credits - totalCost} coins` });
  };

  return (
    <StoreContext.Provider
      value={{
        templates,
        cart,
        purchased,
        credits,
        toast,
        addToCart,
        removeFromCart,
        checkout,
        setToast,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
