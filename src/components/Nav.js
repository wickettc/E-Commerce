import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = ({ cartInfo }) => {
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
              {cartInfo.itemsCount !== 0 ? `(${cartInfo.itemsCount})` : null}
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
