import React from 'react';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <ProductDetail />
      </main>
    </div>
  );
};

export default App;
