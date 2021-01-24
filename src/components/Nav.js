import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = ({ cartInfo }) => {
    const [closeNav, setCloseNav] = useState(true);
    const navBar = useRef(null);
    const closed = closeNav ? 'closed' : '';

    useEffect(() => {
        function handleClick(e) {
            if (!closeNav) {
                if (navBar.current && !navBar.current.contains(e.target)) {
                    setCloseNav(true);
                }
            }
        }

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [closeNav]);

    return (
        <div ref={navBar} className="nav-bar">
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
                    <Link onClick={() => setCloseNav(true)} to="/">
                        <li>Home</li>
                    </Link>
                    <Link onClick={() => setCloseNav(true)} to="/contact">
                        <li>Contact Us</li>
                    </Link>
                    <Link onClick={() => setCloseNav(true)} to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link onClick={() => setCloseNav(true)} to="/cart">
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
