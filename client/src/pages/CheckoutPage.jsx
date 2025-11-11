import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const CheckoutContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  color: #666;
`;

const InfoLabel = styled.span`
  font-weight: 500;
`;

const InfoValue = styled.span`
  color: #333;
`;

const OrderSummary = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 4px;
  margin-top: 1rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: #666;
`;

const TotalRow = styled(SummaryRow)`
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #e0e0e0;
`;

const TotalPrice = styled.span`
  color: #4a9eff;
`;

const PaymentButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background-color: #4a9eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 2rem;

  &:hover {
    background-color: #3a8eef;
  }
`;

const CancelButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #666;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &:hover {
    background-color: #555;
  }
`;

function CheckoutPage() {
  const navigate = useNavigate();

  // TODO: 실제로는 장바구니나 Context에서 데이터를 가져와야 함
  const orderInfo = {
    items: [
      { name: '가구 상품 1', quantity: 1, price: 29900 },
      { name: '가구 상품 2', quantity: 2, price: 39900 }
    ],
    customerInfo: {
      name: '홍길동',
      phone: '010-1234-5678',
      address: '서울시 강남구 테헤란로 123'
    },
    totalPrice: 109700,
    shippingFee: 3000
  };

  const finalTotal = orderInfo.totalPrice + orderInfo.shippingFee;

  const handlePayment = () => {
    alert('결제가 완료되었습니다!');
    navigate('/orders');
  };

  const handleCancel = () => {
    navigate('/cart');
  };

  return (
    <Container>
      <Navbar />
      <ContentWrapper>
        <Title>주문/결제</Title>
        <CheckoutContainer>
          <Section>
            <SectionTitle>배송 정보</SectionTitle>
            <InfoRow>
              <InfoLabel>받는 사람</InfoLabel>
              <InfoValue>{orderInfo.customerInfo.name}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>연락처</InfoLabel>
              <InfoValue>{orderInfo.customerInfo.phone}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>배송지</InfoLabel>
              <InfoValue>{orderInfo.customerInfo.address}</InfoValue>
            </InfoRow>
          </Section>

          <Section>
            <SectionTitle>주문 상품</SectionTitle>
            {orderInfo.items.map((item, index) => (
              <InfoRow key={index}>
                <InfoLabel>{item.name} x {item.quantity}</InfoLabel>
                <InfoValue>{(item.price * item.quantity).toLocaleString()}원</InfoValue>
              </InfoRow>
            ))}
          </Section>

          <Section>
            <SectionTitle>결제 금액</SectionTitle>
            <OrderSummary>
              <SummaryRow>
                <span>상품 금액</span>
                <span>{orderInfo.totalPrice.toLocaleString()}원</span>
              </SummaryRow>
              <SummaryRow>
                <span>배송비</span>
                <span>{orderInfo.shippingFee.toLocaleString()}원</span>
              </SummaryRow>
              <TotalRow>
                <span>총 결제 금액</span>
                <TotalPrice>{finalTotal.toLocaleString()}원</TotalPrice>
              </TotalRow>
            </OrderSummary>
          </Section>

          <PaymentButton onClick={handlePayment}>
            결제하기
          </PaymentButton>
          <CancelButton onClick={handleCancel}>
            취소
          </CancelButton>
        </CheckoutContainer>
      </ContentWrapper>
    </Container>
  );
}

export default CheckoutPage;
