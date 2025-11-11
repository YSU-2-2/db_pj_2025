import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import './Navbar.css';

function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo">쇼핑몰</Link>
      <div className="nav-links">
        <Link to="/products" className="nav-link">상품 목록</Link>
        <Link to="/cart" className="nav-link">장바구니</Link>
        <Link to="/orders" className="nav-link">주문내역</Link>
        {isLoggedIn ? (
          <>
            <span className="user-name">{user?.name}님</span>
            <button onClick={handleLogout} className="logout-button">로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">로그인</Link>
            <Link to="/signup" className="nav-link">회원가입</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
