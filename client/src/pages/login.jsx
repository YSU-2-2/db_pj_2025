import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/login.css';
import { Routes, Route, Link } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../redux/slices/authSlice';

let Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    if (!username || !password) {
      alert('아이디와 비밀번호를 입력하세요');
      return;
    }

    dispatch(loginStart());

    try {
      // TODO: 실제 API 호출로 대체 필요
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password }),
      // });
      // const data = await response.json();

      // 임시 로그인 성공 처리
      setTimeout(() => {
        dispatch(loginSuccess({
          user: { username },
          token: 'temporary-token',
        }));
        alert('로그인 성공!');
      }, 1000);
    } catch (err) {
      dispatch(loginFailure(err.message));
      alert('로그인 실패: ' + err.message);
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
      {error && <div style={{color: 'red'}}>{error}</div>}
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