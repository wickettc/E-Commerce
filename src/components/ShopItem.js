import React from 'react';
import '../css/ShopItem.css';
import { Link } from 'react-router-dom';

const ShopItem = ({ id, title, image, description, price, addToCart }) => {
  return (
    <div className="shop-item">
      <Link to={`/shop/${id}`}>
        <h2>{title}</h2>
      </Link>
      <Link to={`/shop/${id}`}>
        <img src={image} alt={title} />
      </Link>
      {/* <p>
        {description.length > 100
          ? `${description.substring(0, 100)}...`
          : description}
      </p> */}
      <h3>${price.toFixed(2)}</h3>
      <button onClick={addToCart} className="add-to-cart-btn">
        Add To Cart
      </button>
    </div>
  );
};

export default ShopItem;
