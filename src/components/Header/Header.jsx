import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="logo" />
                <div>
                    <a href="/order">Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/manage-inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;