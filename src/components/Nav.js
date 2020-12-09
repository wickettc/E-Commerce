import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = ({ cart }) => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(
      cart.reduce((acc, cur) => {
        return acc + cur.count;
      }, 0)
    );
  }, [cart]);

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
              {cartTotal !== 0 ? `(${cartTotal})` : null}
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
