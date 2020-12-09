import React from 'react';
import '../css/Checkout.css';
import construction from '../images/construction.jpg';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div>Well This is Embarassing</div>
      <img
        className="checkout-img"
        src={construction}
        alt="Under Construction"
      />
      <div>Coming Soon!</div>
    </div>
  );
};

export default Checkout;
