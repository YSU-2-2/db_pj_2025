import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const CartContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  padding-top: 70px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartItem = styled.div`
  background: white;
  border-radius: 16px;
  padding: 25px;
  display: flex;
  gap: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ItemImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  background: ${props => props.$bgColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 150px;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 10px;
`;

const ItemName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const ItemCategory = styled.span`
  font-size: 14px;
  color: #6c757d;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #dc3545;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;

  &:hover {
    opacity: 0.7;
  }
`;

const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #667eea;
    color: white;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const Quantity = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  min-width: 30px;
  text-align: center;
`;

const ItemPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #667eea;
`;

const Summary = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: fit-content;
  position: sticky;
  top: 90px;
`;

const SummaryTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 25px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 16px;
  color: #6c757d;

  &:last-of-type {
    margin-bottom: 25px;
  }
`;

const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 2px solid #e9ecef;
  margin-bottom: 25px;
`;

const TotalLabel = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
`;

const TotalAmount = styled.span`
  font-size: 26px;
  font-weight: 800;
  color: #667eea;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const EmptyCart = styled.div`
  background: white;
  border-radius: 16px;
  padding: 80px 40px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const EmptyIcon = styled.div`
  font-size: 80px;
  margin-bottom: 20px;
`;

const EmptyText = styled.p`
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 30px;
`;

const ShopButton = styled.button`
  padding: 14px 32px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #5568d3;
    transform: translateY(-2px);
  }
`;

function CartPage() {
  const navigate = useNavigate();

  // 샘플 장바구니 데이터
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '프리미엄 무선 이어폰',
      category: '오디오',
      price: 129000,
      quantity: 1,
      emoji: '🎧',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      name: '스마트 워치',
      category: '웨어러블',
      price: 299000,
      quantity: 1,
      emoji: '⌚',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 3000 : 0;
  const total = subtotal + shipping;

  const formatPrice = (price) => {
    return price.toLocaleString() + '원';
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/payment');
    }
  };

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <Navbar />
        <Content>
          <Title>장바구니</Title>
          <EmptyCart>
            <EmptyIcon>🛒</EmptyIcon>
            <EmptyText>장바구니가 비어있습니다</EmptyText>
            <ShopButton onClick={() => navigate('/category')}>
              쇼핑하러 가기
            </ShopButton>
          </EmptyCart>
        </Content>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <Navbar />
      <Content>
        <Title>장바구니</Title>

        <CartLayout>
          <CartItems>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemImage $bgColor={item.bgColor}>
                  {item.emoji}
                </ItemImage>
                <ItemInfo>
                  <div>
                    <ItemHeader>
                      <div>
                        <ItemName>{item.name}</ItemName>
                        <ItemCategory>{item.category}</ItemCategory>
                      </div>
                      <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                        ×
                      </RemoveButton>
                    </ItemHeader>
                  </div>
                  <ItemFooter>
                    <QuantityControl>
                      <QuantityButton
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </QuantityButton>
                      <Quantity>{item.quantity}</Quantity>
                      <QuantityButton onClick={() => handleQuantityChange(item.id, 1)}>
                        +
                      </QuantityButton>
                    </QuantityControl>
                    <ItemPrice>{formatPrice(item.price * item.quantity)}</ItemPrice>
                  </ItemFooter>
                </ItemInfo>
              </CartItem>
            ))}
          </CartItems>

          <Summary>
            <SummaryTitle>주문 요약</SummaryTitle>
            <SummaryRow>
              <span>상품 금액</span>
              <span>{formatPrice(subtotal)}</span>
            </SummaryRow>
            <SummaryRow>
              <span>배송비</span>
              <span>{formatPrice(shipping)}</span>
            </SummaryRow>
            <SummaryTotal>
              <TotalLabel>총 결제 금액</TotalLabel>
              <TotalAmount>{formatPrice(total)}</TotalAmount>
            </SummaryTotal>
            <CheckoutButton onClick={handleCheckout}>
              결제하기
            </CheckoutButton>
          </Summary>
        </CartLayout>
      </Content>
    </CartContainer>
  );
}

export default CartPage;
