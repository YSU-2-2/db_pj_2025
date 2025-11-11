import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import Navbar from '../components/Navbar';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: 실제로는 API 호출로 인증해야 함
    // 지금은 임시로 이메일만 있으면 로그인 성공으로 처리
    if (email && password) {
      dispatch(login({
        email: email,
        name: email.split('@')[0]
      }));
      alert('로그인 성공!');
      navigate('/');
    } else {
      alert('이메일과 비밀번호를 입력해주세요.');
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="login-content-wrapper">
        <div className="login-box">
          <h1 className="login-title">로그인</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">이메일</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>
            <button type="submit" className="login-button">로그인</button>
          </form>
          <p className="link-text">
            계정이 없으신가요? <Link to="/signup" className="styled-link">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
