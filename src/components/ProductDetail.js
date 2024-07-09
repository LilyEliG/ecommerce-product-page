import React from 'react';
import productImage from '../assets/image-product-1.jpg';
import thumbnail1 from '../assets/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/image-product-4-thumbnail.jpg';
import minusIcon from '../assets/icon-minus.svg';
import plusIcon from '../assets/icon-plus.svg';
import cartIcon from '../assets/icon-cart.svg';
import './ProductDetail.css';

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={productImage} alt="Product" />
        <div className="thumbnail-gallery">
          <img src={thumbnail1} alt="Thumbnail 1" />
          <img src={thumbnail2} alt="Thumbnail 2" />
          <img src={thumbnail3} alt="Thumbnail 3" />
          <img src={thumbnail4} alt="Thumbnail 4" />
        </div>
      </div>
      <div className="product-info">
        <h3>Sneaker Company</h3>
        <h1>Fall Limited Edition<br/>Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual<br/> wear companion. Featuring a durable rubber outer<br/>sole, they'll withstand everything the weather can offer.</p>
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
    </div>
  );
};

export default ProductDetail;
