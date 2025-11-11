import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './../css/login.css';
import Login from '../components/login.jsx';
import Signup_page from '../components/signup.jsx';
import MainPage from './main_page.jsx';
import DetailPage from './detail_page.jsx';
import CategoryPage from './category_page.jsx';
import CartPage from './cart_page.jsx';
import PaymentPage from './payment_page.jsx';
import OrderHistoryPage from './order_history_page.jsx';
import ReviewPage from './review_page.jsx';


function App() {
  return (
  <div className="app">

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup_page/>} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/order-history" element={<OrderHistoryPage />} />
      <Route path="/review" element={<ReviewPage />} />
    </Routes>
    {/* router 예시 */}
    {/* <nav>
      <Link to="/Home">홈</Link> | <Link to="/about">소개</Link>
    </nav> */}

  </div>

  );
}

export default App;
