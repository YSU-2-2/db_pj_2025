import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const CartContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
`;

const EmptyCartMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const GoShoppingButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4a9eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a8eef;
  }
`;

const CartItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1.5rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.8rem;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0;
`;

const ItemPrice = styled.div`
  font-size: 1rem;
  color: #666;
`;

const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Quantity = styled.span`
  font-size: 1rem;
  color: #333;
  min-width: 30px;
  text-align: center;
`;

const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dd3333;
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #666;
`;

const TotalRow = styled(SummaryRow)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-top: 0.5rem;
`;

const TotalPrice = styled.span`
  color: #4a9eff;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #4a9eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &:hover {
    background-color: #3a8eef;
  }
`;

function CartPage() {
  const navigate = useNavigate();

  // TODO: 실제로는 Redux나 Context API로 관리
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '가구 상품 1',
      price: 29900,
      quantity: 1
    },
    {
      id: 2,
      name: '가구 상품 2',
      price: 39900,
      quantity: 2
    }
  ]);

  const handleQuantityChange = (itemId, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalPrice = calculateTotal();
  const shippingFee = totalPrice > 50000 ? 0 : 3000;
  const finalTotal = totalPrice + shippingFee;

  return (
    <Container>
      <Navbar />
      <ContentWrapper>
        <Title>장바구니</Title>
        <CartContainer>
          {cartItems.length === 0 ? (
            <EmptyCart>
              <EmptyCartMessage>장바구니가 비어있습니다.</EmptyCartMessage>
              <GoShoppingButton onClick={() => navigate('/')}>
                쇼핑 계속하기
              </GoShoppingButton>
            </EmptyCart>
          ) : (
            <>
              <CartItemList>
                {cartItems.map(item => (
                  <CartItem key={item.id}>
                    <ItemImage>상품 이미지</ItemImage>
                    <ItemInfo>
                      <ItemName>{item.name}</ItemName>
                      <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
                    </ItemInfo>
                    <ItemActions>
                      <QuantityControl>
                        <QuantityButton
                          onClick={() => handleQuantityChange(item.id, -1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </QuantityButton>
                        <Quantity>{item.quantity}</Quantity>
                        <QuantityButton
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </QuantityButton>
                      </QuantityControl>
                      <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                        삭제
                      </RemoveButton>
                    </ItemActions>
                  </CartItem>
                ))}
              </CartItemList>
              <CartSummary>
                <SummaryRow>
                  <span>상품 금액</span>
                  <span>{totalPrice.toLocaleString()}원</span>
                </SummaryRow>
                <SummaryRow>
                  <span>배송비</span>
                  <span>{shippingFee === 0 ? '무료' : `${shippingFee.toLocaleString()}원`}</span>
                </SummaryRow>
                <TotalRow>
                  <span>총 결제 금액</span>
                  <TotalPrice>{finalTotal.toLocaleString()}원</TotalPrice>
                </TotalRow>
                <CheckoutButton onClick={handleCheckout}>
                  주문하기
                </CheckoutButton>
              </CartSummary>
            </>
          )}
        </CartContainer>
      </ContentWrapper>
    </Container>
  );
}

export default CartPage;
