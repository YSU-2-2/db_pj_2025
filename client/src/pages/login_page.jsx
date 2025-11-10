import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './../css/login.css';
import Login from '../components/login.jsx';
import Signup_page from '../components/signup.jsx';


function App() {
  return (
  <div className="app">

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup_page/>} />
      <Route path="/main" element={<div>메인페이지</div>} />
      
    </Routes>
    {/* router 예시 */}
    {/* <nav>
      <Link to="/Home">홈</Link> | <Link to="/about">소개</Link>
    </nav> */}

  </div>

  );
}

export default App;
