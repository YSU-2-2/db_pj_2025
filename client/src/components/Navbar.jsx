import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #ddd;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  &:hover {
    color: #4a9eff;
  }
`;

const LogoutButton = styled.button`
  color: white;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #4a9eff;
  }
`;

const UserName = styled.span`
  color: #4a9eff;
  font-size: 1rem;
  margin-right: 1rem;
`;

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
    <NavbarContainer>
      <Logo to="/">쇼핑몰</Logo>
      <NavLinks>
        <NavLink to="/products">상품 목록</NavLink>
        <NavLink to="/cart">장바구니</NavLink>
        <NavLink to="/orders">주문내역</NavLink>
        {isLoggedIn ? (
          <>
            <UserName>{user?.name}님</UserName>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </>
        ) : (
          <>
            <NavLink to="/login">로그인</NavLink>
            <NavLink to="/signup">회원가입</NavLink>
          </>
        )}
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
