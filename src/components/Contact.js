import React from 'react';
import contact from '../images/contact.jpg';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <h3>You can react us at 123-456-7890</h3>
      <h3>OR</h3>
      <h3>contact-us@shopping-cart.com</h3>
      <img
        style={{ borderRadius: '35%', height: '50vh' }}
        src={contact}
        alt="Contact Us"
      />
    </div>
  );
};

export default Contact;
