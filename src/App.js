import React, { useState } from 'react';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  return (
    <div>
      <Header cartItems={cartItems} onDeleteItem={handleDeleteItem} />
      <ProductDetail onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
