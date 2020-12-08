import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = ({ totalItems }) => {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/cart">
            <li>
              Cart
              {totalItems !== 0 ? `(${totalItems})` : null}
              {/* Cart {countedCart.length !== 0 ? `(${countedCart.length})` : null} */}
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
