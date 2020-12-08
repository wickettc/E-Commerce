import React from 'react';
import '../css/ShopItem.css';

const ShopItem = ({ title, image, description, price, addToCart }) => {
  return (
    <div className="shop-item">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>
        {description.length > 100
          ? `${description.substring(0, 100)}...`
          : description}
      </p>
      <h3>${price.toFixed(2)}</h3>
      <button onClick={addToCart} className="add-to-cart-btn">
        Add To Cart
      </button>
    </div>
  );
};

export default ShopItem;
