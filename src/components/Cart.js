import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, increaseCount, decreaseCount, removeItem }) => {
  return (
    <div>
      {cart.length !== 0
        ? cart.map((cart) => {
            return (
              <CartItem
                key={cart.id}
                title={cart.title}
                image={cart.image}
                price={cart.price}
                count={cart.count}
                id={cart.id}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                removeItem={removeItem}
              />
            );
          })
        : 'No items in cart yet!'}
    </div>
  );
};

export default Cart;
