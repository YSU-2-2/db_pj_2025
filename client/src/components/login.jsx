import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/login.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../redux/slices/authSlice';
import axios from 'axios';

let Login = () => {
  //환경변수 가져오기
  const API_URL = import.meta.env.VITE_API_URL;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
  if (isAuthenticated) {
    navigate('/main');
  }
  }, [isAuthenticated, navigate]);

  const handleLogin = async () => {
  if (!username || !password) {
    alert('아이디와 비밀번호를 입력하세요');
    return;
  }
  //스토어의 state값 변경해주는 함수
  dispatch(loginStart());

  try {
    const response = await axios.post(`${API_URL}/api/login/test`, {
      id: username,
      pw: password
    });

    console.log('서버 응답:', response.data);

    // 서버에서 받은 JSON 데이터를 alert으로 출력
    alert(`서버 응답:\n${JSON.stringify(response.data, null, 2)}`);

    dispatch(loginSuccess({
      user: { username },
      token: 'temporary-token',
    }));
  } catch (err) {
    dispatch(loginFailure(err.message));
    alert('로그인 실패: ' + err.message);
    console.log(err);
  }
  };

  return (
  <div className='login_component'>
    <h1 className='login_title'>뭐시기 쇼핑몰</h1>
    <h2 className='login_subtitle'>Login</h2>
    <div className='input_group'>
      <label>아이디</label>
      <input
        type='text'
        placeholder='아이디를 입력하세요'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className='input_group'>
      <label>비밀번호</label>
      <input
        type='password'
        placeholder='비밀번호를 입력하세요'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
      />
    </div>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    <button
      className='login_button'
      onClick={handleLogin}
      disabled={loading}
    >
      {loading ? '로그인 중...' : '로그인'}
    </button>
    <div className="signup">
      <Link to='/find_pw'>비밀번호 찾기</Link>
      <Link to='/signup'>회원가입</Link>
    </div>
  </div>
  )
}


export default Login