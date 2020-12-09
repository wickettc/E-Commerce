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
  removeItem,
}) => {
  return (
    <div className="cart-item">
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <button onClick={() => decreaseCount(id)}>-</button>
      <div className="item-counter">{count}</div>
      <button onClick={() => increaseCount(id)}>+</button>
      <h6>${price} Each</h6>
      <button onClick={() => removeItem(id)}>Remove</button>
    </div>
  );
};

export default CartItem;
