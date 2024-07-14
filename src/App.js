import React, { useState } from 'react';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (newItem) => {
    setCartItems([newItem]); // Replace the entire cart with the new item
  };

  const handleDeleteItem = () => {
    setCartItems([]); // Clear the cart
  };

  return (
    <div className="App">
      <Header cartItems={cartItems} onDeleteItem={handleDeleteItem} />
      <ProductDetail onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
