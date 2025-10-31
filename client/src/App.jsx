import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>db과제</h1>
      <Routes>
        <Route path="/Home" element={<div>홈 페이지</div>} />
        <Route path="/about" element={<div>소개 페이지</div>} />
      </Routes>       
      {/* router 예시 */}
      <nav>
        <Link to="/Home">홈</Link> | <Link to="/about">소개</Link>
      </nav>

    </div>
  );
}

export default App;
