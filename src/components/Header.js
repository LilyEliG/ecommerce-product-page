import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import cartIcon from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';
import deleteIcon from '../assets/icon-delete.svg';
import menuIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-close.svg';
import './Header.css';

const Header = ({ cartItems = [], onDeleteItem }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header>
      <div className="logo-container">
        <img
          src={menuIcon}
          alt="Menu"
          className="menu-icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <img src={logo} alt="Sneakers Logo" className="logo" />
        <nav className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
          <img
            src={closeIcon}
            alt="Close"
            className="close-icon"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <ul>
            <li onClick={() => setIsMobileMenuOpen(false)}>Collections</li>
            <li onClick={() => setIsMobileMenuOpen(false)}>Men</li>
            <li onClick={() => setIsMobileMenuOpen(false)}>Women</li>
            <li onClick={() => setIsMobileMenuOpen(false)}>About</li>
            <li onClick={() => setIsMobileMenuOpen(false)}>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="icons">
        <div className="cart-icon" onClick={toggleCart}>
          <img src={cartIcon} alt="Cart" />
          {cartItems.length > 0 && <span className="cart-quantity">{cartItems[0].quantity}</span>}
        </div>
        <img src={avatar} alt="Profile" className="profile-icon" />
      </div>
      {isCartOpen && (
        <div className={`cart-dropdown ${isCartOpen ? 'open' : ''}`}>
          <h3>Cart</h3>
          <hr />
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-item">
                <img src={cartItems[0].image} alt={cartItems[0].name} />
                <div className="cart-item-details">
                  <p>{cartItems[0].name}</p>
                  <div className="cart-item-price">
                    <span>${cartItems[0].price.toFixed(2)} x {cartItems[0].quantity}</span>
                    <strong>${(cartItems[0].price * cartItems[0].quantity).toFixed(2)}</strong>
                  </div>
                </div>
                <img
                  src={deleteIcon}
                  alt="Delete"
                  className="delete-icon"
                  onClick={() => onDeleteItem(cartItems[0].id)}
                />
              </div>
              <button className="checkout-button">Checkout</button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
