import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  padding: 10px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid white;

  ${props => props.$variant === 'outline' ? `
    background: transparent;
    color: white;

    &:hover {
      background: white;
      color: #667eea;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
    }
  ` : `
    background: white;
    color: #667eea;

    &:hover {
      background: rgba(255, 255, 255, 0.9);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
    }
  `}

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo to="/main">MyApp</Logo>

      <NavLinks $isOpen={isOpen}>
        <NavLink to="/main" onClick={() => setIsOpen(false)}>홈</NavLink>
        <NavLink to="/category" onClick={() => setIsOpen(false)}>카테고리</NavLink>
        <NavLink to="/cart" onClick={() => setIsOpen(false)}>장바구니</NavLink>
        <NavLink to="/order-history" onClick={() => setIsOpen(false)}>주문내역</NavLink>

        <ButtonGroup>
          <Button to="/" $variant="outline" onClick={() => setIsOpen(false)}>
            로그인
          </Button>
          <Button to="/signup" onClick={() => setIsOpen(false)}>
            회원가입
          </Button>
        </ButtonGroup>
      </NavLinks>

      <HamburgerButton onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </HamburgerButton>
    </NavbarContainer>
  );
}

export default Navbar;
