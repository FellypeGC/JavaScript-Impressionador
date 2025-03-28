import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/HomePage/Home';
import Checkout from './pages/ChekoutPage/Checkout';
import PurchaseHistory from './pages/PurchaseHistoryPage/PurchaseHistory';
import { Routes, Route } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId) => {
    setCartItems({
      ...cartItems,
      [productId]: (cartItems[productId] ?? 0) + 1,
    });
  };

  const decreaseUnit = (productId) => {
    if (cartItems[productId] > 1) {
      setCartItems({
        ...cartItems,
        [productId]: (cartItems[productId]) - 1,
      });
    } else {
      removeFromCart(productId);
    }
  };

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeFromCart = (productId) => {
    const cartItemsCopy = { ...cartItems };
    delete cartItemsCopy[productId];
    setCartItems(cartItemsCopy);
  }

  return (
    <CartContext.Provider value={ { isCartOpen, toggleIsCartOpen, cartItems, addToCart, decreaseUnit, removeFromCart } }>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/history' element={<PurchaseHistory />} />
      </Routes>
    </CartContext.Provider>
  )
};

export default App;
