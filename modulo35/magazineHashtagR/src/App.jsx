import Header from './components/Header';
import Home from './pages/HomePage/Home';
import Checkout from './pages/ChekoutPage/Checkout';
import PurchaseHistory from './pages/PurchaseHistoryPage/PurchaseHistory';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkout' element={<PurchaseHistory />} />
      </Routes>
    </>
  )
};

export default App;
