import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './css/SignupPage.css';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // TODO: 회원가입 로직 구현
    console.log('회원가입 시도:', formData);
  };

  return (
    <div className="signup-container">
      <Navbar />
      <div className="signup-content-wrapper">
        <div className="signup-box">
          <h1 className="signup-title">회원가입</h1>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">이름</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름을 입력하세요"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">이메일</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="이메일을 입력하세요"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="비밀번호를 다시 입력하세요"
                required
              />
            </div>
            <button className="signup-button" type="submit">가입하기</button>
          </form>
          <p className="signup-link-text">
            이미 계정이 있으신가요? <Link to="/login" className="signup-styled-link">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
