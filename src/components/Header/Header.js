import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src="images/logo.jpg" alt="" />
                <h1>SunglassBd.com</h1>
            </div>
            <div className="sites">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Cart</a>
                <a href="">About</a>
            </div>
        </div>
    );
};

export default Header;