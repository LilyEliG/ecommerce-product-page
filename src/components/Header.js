import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import cartIcon from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';
import deleteIcon from '../assets/icon-delete.svg';
import './Header.css';

const Header = ({ cartItems = [], onDeleteItem }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
        <div className="cart-icon" onClick={toggleCart}>
          <img src={cartIcon} alt="Cart" />
          {cartItems.length > 0 && <span className="cart-quantity">{cartItems.length}</span>}
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
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <p>{item.name}</p>
                    <div className="cart-item-price">
                      <span>${item.price.toFixed(2)} x {item.quantity}</span>
                      <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    </div>
                  </div>
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    className="delete-icon"
                    onClick={() => onDeleteItem(item.id)}
                  />
                </div>
              ))}
              <p>Total: ${totalPrice.toFixed(2)}</p>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
