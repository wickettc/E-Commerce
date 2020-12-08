import React from 'react';
import CartItem from './CartItem';

const Cart = ({ countedCart, increaseCount, decreaseCount }) => {
  return (
    <div>
      {countedCart.length !== 0
        ? countedCart.map((cart) => {
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
              />
            );
          })
        : 'No items in cart yet!'}
    </div>
  );
};

export default Cart;
