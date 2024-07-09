import React from 'react';
import logo from '../assets/logo.svg';
import cartIcon from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Sneakers Logo" className="logo" />
        <nav>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="icons">
        <img src={cartIcon} alt="Cart" className="cart-icon" />
        <img src={avatar} alt="Profile" className="profile-icon" />
      </div>
    </header>
  );
};

export default Header;
