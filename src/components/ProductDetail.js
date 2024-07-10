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
import './ProductDetail.css';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
            <img src={minusIcon} alt="Minus" />
            <span>0</span>
            <img src={plusIcon} alt="Plus" />
          </div>
          <button>
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
    </div>
  );
};

export default ProductDetail;
