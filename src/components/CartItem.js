import React from 'react';
import '../css/CartItem.css';

const CartItem = ({
  id,
  title,
  image,
  price,
  count,
  increaseCount,
  decreaseCount,
}) => {
  return (
    <div className="cart-item">
      <h5>{title}</h5>
      <img src={image} alt={title} />
      <button onClick={() => decreaseCount(id)}>-</button>
      <div className="item-counter">{count}</div>
      <button onClick={() => increaseCount(id)}>+</button>
      <h6>${price} Each</h6>
    </div>
  );
};

export default CartItem;
