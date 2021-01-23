import React from 'react';
import welcome from '../images/welcome.jpg';

const Home = () => {
    return (
        <div>
            <h1>
                <i style={{ fontSize: '2.5rem' }}>Welcome to Our Store!</i>
            </h1>
            <img
                style={{ width: '40%', borderRadius: '25%' }}
                src={welcome}
                alt="Welcome to the store"
            />
        </div>
    );
};

export default Home;
