import React from 'react';
import '../css/Cart.css';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = ({ cart, cartInfo, increaseCount, decreaseCount, removeItem }) => {
  return (
    <div className="cart-container">
      <div className="cart-body">
        {cart.length !== 0 ? (
          cart.map((cart, index) => {
            return (
              <div className="cart-item-container" key={cart.id}>
                <CartItem
                  title={cart.title}
                  image={cart.image}
                  price={cart.price}
                  count={cart.count}
                  id={cart.id}
                  increaseCount={increaseCount}
                  decreaseCount={decreaseCount}
                  removeItem={removeItem}
                />
                <hr />
              </div>
            );
          })
        ) : (
          <div className="empty-cart">No items in cart yet!</div>
        )}
      </div>
      <div id="checkout-container">
        <div>Items in Cart: {cartInfo.itemsCount}</div>
        <div>Total: ${cartInfo.totalPrice.toFixed(2)} USD</div>
        <Link to={'/checkout'}>
          <button className="checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
