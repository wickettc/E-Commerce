import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = ({ cartInfo }) => {
    const [closeNav, setCloseNav] = useState(true);

    const closed = closeNav ? 'closed' : '';

    return (
        <div className="nav-bar">
            <nav>
                <div
                    className="nav-hamburger"
                    onClick={() => {
                        setCloseNav(!closeNav);
                    }}
                >
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                </div>
                <ul className={`${closed}`}>
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
                            {cartInfo.itemsCount !== 0
                                ? `(${cartInfo.itemsCount})`
                                : null}
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
