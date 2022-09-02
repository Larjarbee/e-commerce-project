import React from 'react';
import CartProvider from './store/cart-provider';
import Navbar from './components/header/Navbar';
import Home from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/footer/Footer';
import Cart from './pages/CartPage';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home/*' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productTitle' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
};

export default App;
