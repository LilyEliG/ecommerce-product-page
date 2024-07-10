import React, { useState } from 'react';
import productImage1 from '../assets/image-product-1.jpg';
import productImage2 from '../assets/image-product-2.jpg';
import productImage3 from '../assets/image-product-3.jpg';
import productImage4 from '../assets/image-product-4.jpg';
import thumbnail1 from '../assets/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/image-product-4-thumbnail.jpg';
import minusIcon from '../assets/icon-minus.svg';
import plusIcon from '../assets/icon-plus.svg';
import cartIcon from '../assets/icon-cart.svg';
import closeIcon from '../assets/icon-close.svg';
import deleteIcon from '../assets/icon-delete.svg';
import './ProductDetail.css';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const productImages = [productImage1, productImage2, productImage3, productImage4];
  const thumbnailImages = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  const handleMainImageClick = () => {
    setIsLightboxOpen(true);
  };

  const handleLightboxClose = () => {
    setIsLightboxOpen(false);
  };

  const handlePreviousImage = () => {
    setSelectedImage((prevIndex) => (prevIndex === 0 ? productImages.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex === productImages.length - 1 ? 0 : prevIndex + 1));
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      const item = {
        id: Date.now(),
        name: 'Fall Limited Edition Sneakers',
        price: 125,
        quantity: quantity,
        image: productImages[0],
      };
      setCartItems([...cartItems, item]);
      setQuantity(0);
    }
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={productImages[selectedImage]} alt="Product" onClick={handleMainImageClick} />
        <div className="thumbnail-gallery">
          {thumbnailImages.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className={selectedImage === index ? 'selected' : ''}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h3>Sneaker Company</h3>
        <h1>Fall Limited Edition<br />Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual<br /> wear companion. Featuring a
          durable rubber outer<br />sole, they'll withstand everything the weather can offer.
        </p>
        <div className="price">
          <span className="current-price">$125.00</span>
          <span className="discount">50%</span>
        </div>
        <span className="original-price">$250.00</span>
        <div className="add-to-cart">
          <div className="quantity">
            <img src={minusIcon} alt="Minus" onClick={() => handleQuantityChange(quantity - 1)} />
            <span>{quantity}</span>
            <img src={plusIcon} alt="Plus" onClick={() => handleQuantityChange(quantity + 1)} />
          </div>
          <button onClick={handleAddToCart}>
            <img src={cartIcon} alt="Cart" />
            Add to cart
          </button>
        </div>
      </div>
      {isLightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <img src={productImages[selectedImage]} alt="Product" className="lightbox-image" />
            <button className="close-button" onClick={handleLightboxClose}>
              <img src={closeIcon} alt="Close" />
            </button>
            <button className="arrow-button previous" onClick={handlePreviousImage}>
              &lt;
            </button>
            <button className="arrow-button next" onClick={handleNextImage}>
              &gt;
            </button>
            <div className="thumbnail-gallery">
              {thumbnailImages.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className={selectedImage === index ? 'selected' : ''}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="cart-icon" onClick={toggleCart}>
        <img src={cartIcon} alt="Cart" />
        {cartItems.length > 0 && <span className="cart-quantity">{cartItems.length}</span>}
      </div>
      {isCartOpen && (
        <div className="cart-dropdown">
          <h3>Cart</h3>
          <hr />
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
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
                  onClick={() => handleDeleteItem(item.id)}
                />
              </div>
            ))
          )}
          {cartItems.length > 0 && (
            <p>Total: ${totalPrice.toFixed(2)}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
