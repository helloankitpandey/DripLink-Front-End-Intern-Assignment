import React from 'react';
import { useStore } from '../context/StoreContext';

const Cart = () => {
  const { cart, removeFromCart, checkout, credits } = useStore();

  const totalCost = cart.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>{item.cost === 0 ? 'Free' : `${item.cost} coins`}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <p>Total: {totalCost} coins</p>
        <p>Credits: {credits} coins</p>
        <button onClick={checkout} disabled={cart.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
