# E-commerce Product Page

Hello! My name is Lily and this project is a challene I did for Frontend Mentor. A responsive e-commerce product page built with React, showcasing advanced 
front-end techniques and solutions to common UI challenges.

## Key Features

- Responsive design with distinct desktop and mobile layouts
- Interactive image gallery with lightbox functionality
- Dynamic price display with discount calculation
- Quantity selector with add-to-cart functionality

## Technologies Used

- React
- CSS3
- JavaScript (ES6+)
  

## Links
- LinkedIn: https://www.linkedin.com/in/lily-eli-goloh-3b3736242/
- Frontend Mentor Profile: https://www.frontendmentor.io/profile/LilyEliG


## Techniques and Code Snippets

### Responsive Image Gallery

The image gallery adapts to different screen sizes, using CSS media queries 
and React state management:

```jsx
const handleMainImageClick = () => {
  if (window.innerWidth > 768) {
    setIsLightboxOpen(true);
  }
};
This code ensures the lightbox only opens on desktop views, enhancing mobile UX.
Dynamic Price Calculation
Price and discount are dynamically rendered:
jsxCopy<div className="price-container">
  <div className="price">
    <span className="current-price">$125.00</span>
    <span className="discount">50%</span>
  </div>
  <span className="original-price">$250.00</span>
</div>
Quantity Selector with Boundaries
The quantity selector prevents negative values:
jsxCopyconst handleQuantityChange = (value) => {
  if (value >= 0) {
    setQuantity(value);
  }
};
Challenges and Solutions
Challenge: Lightbox Positioning
Initially, the lightbox close button was awkwardly positioned.
Solution: Adjusted the CSS to position it outside the main content area:
cssCopy.lightbox .close-button {
  position: absolute;
  top: -40px;
  right: -40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}
Challenge: Mobile Price Layout
The original price needed to be inline with the current price on mobile views,
but separate on desktop.
Solution: Used CSS Flexbox and media queries to create different layouts:
cssCopy@media screen and (max-width: 768px) {
  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
Challenge: Maintaining State Across Components
Implementing the cart functionality across components was tricky.
Solution: Utilized React's state lifting to manage cart state in a parent
component and pass it down as props.
Future Improvements

Implement a full shopping cart page
Add product variants (size, color)
Integrate with a backend API for dynamic product data

Contributing
Feel free to fork this project and submit pull requests. For major changes,
please open an issue first to discuss your ideas.
