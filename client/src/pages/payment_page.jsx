import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const PaymentContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  padding-top: 70px;
`;

const Content = styled.div`
  max-width: 1000px;
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

const PaymentLayout = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 2px solid #e9ecef;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 25px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #495057;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentMethod = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px;
`;

const MethodButton = styled.button`
  padding: 20px;
  border: 2px solid ${props => props.$active ? '#667eea' : '#e9ecef'};
  background: ${props => props.$active ? '#f8f9ff' : 'white'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: #667eea;
  }
`;

const MethodIcon = styled.div`
  font-size: 32px;
`;

const MethodLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.$active ? '#667eea' : '#6c757d'};
`;

const OrderSummary = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 25px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 16px;
  color: #6c757d;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 2px solid #dee2e6;
  margin-top: 15px;
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

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  padding: 18px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  ${props => props.$variant === 'primary' ? `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    }
  ` : `
    background: white;
    color: #6c757d;
    border: 2px solid #dee2e6;

    &:hover {
      background: #f8f9fa;
    }
  `}
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #6c757d;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

function PaymentPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    detailAddress: '',
    zipCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = () => {
    if (!agreedToTerms) {
      alert('구매 조건 및 결제 대행 서비스 약관에 동의해주세요.');
      return;
    }

    // 간단한 유효성 검사
    if (!formData.name || !formData.phone || !formData.address) {
      alert('필수 정보를 모두 입력해주세요.');
      return;
    }

    // 결제 처리 (실제로는 API 호출)
    alert('결제가 완료되었습니다!');
    navigate('/order-history');
  };

  return (
    <PaymentContainer>
      <Navbar />
      <Content>
        <Title>결제하기</Title>

        <PaymentLayout>
          <Section>
            <SectionTitle>배송 정보</SectionTitle>
            <FormGroup>
              <Label>받는 사람</Label>
              <Input
                type="text"
                name="name"
                placeholder="이름을 입력하세요"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormRow>
              <FormGroup>
                <Label>휴대폰 번호</Label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>이메일</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </FormRow>
            <FormGroup>
              <Label>주소</Label>
              <Input
                type="text"
                name="address"
                placeholder="기본 주소를 입력하세요"
                value={formData.address}
                onChange={handleInputChange}
                style={{ marginBottom: '10px' }}
              />
              <Input
                type="text"
                name="detailAddress"
                placeholder="상세 주소를 입력하세요"
                value={formData.detailAddress}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>결제 수단</SectionTitle>
            <PaymentMethod>
              <MethodButton
                $active={paymentMethod === 'card'}
                onClick={() => setPaymentMethod('card')}
              >
                <MethodIcon>💳</MethodIcon>
                <MethodLabel $active={paymentMethod === 'card'}>신용카드</MethodLabel>
              </MethodButton>
              <MethodButton
                $active={paymentMethod === 'bank'}
                onClick={() => setPaymentMethod('bank')}
              >
                <MethodIcon>🏦</MethodIcon>
                <MethodLabel $active={paymentMethod === 'bank'}>계좌이체</MethodLabel>
              </MethodButton>
              <MethodButton
                $active={paymentMethod === 'kakao'}
                onClick={() => setPaymentMethod('kakao')}
              >
                <MethodIcon>💬</MethodIcon>
                <MethodLabel $active={paymentMethod === 'kakao'}>카카오페이</MethodLabel>
              </MethodButton>
              <MethodButton
                $active={paymentMethod === 'toss'}
                onClick={() => setPaymentMethod('toss')}
              >
                <MethodIcon>💙</MethodIcon>
                <MethodLabel $active={paymentMethod === 'toss'}>토스페이</MethodLabel>
              </MethodButton>
            </PaymentMethod>

            {paymentMethod === 'card' && (
              <div style={{ marginTop: '25px' }}>
                <FormGroup>
                  <Label>카드 번호</Label>
                  <Input
                    type="text"
                    name="cardNumber"
                    placeholder="0000-0000-0000-0000"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormRow>
                  <FormGroup>
                    <Label>유효기간</Label>
                    <Input
                      type="text"
                      name="cardExpiry"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>CVC</Label>
                    <Input
                      type="text"
                      name="cardCVC"
                      placeholder="000"
                      value={formData.cardCVC}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </FormRow>
              </div>
            )}
          </Section>

          <Section>
            <SectionTitle>주문 요약</SectionTitle>
            <OrderSummary>
              <SummaryRow>
                <span>상품 금액</span>
                <span>428,000원</span>
              </SummaryRow>
              <SummaryRow>
                <span>배송비</span>
                <span>3,000원</span>
              </SummaryRow>
              <TotalRow>
                <TotalLabel>총 결제 금액</TotalLabel>
                <TotalAmount>431,000원</TotalAmount>
              </TotalRow>
            </OrderSummary>

            <div style={{ marginTop: '25px' }}>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />
                구매 조건 및 결제 대행 서비스 약관에 동의합니다
              </CheckboxLabel>
            </div>
          </Section>

          <ButtonGroup>
            <Button $variant="secondary" onClick={() => navigate(-1)}>
              취소
            </Button>
            <Button $variant="primary" onClick={handlePayment}>
              결제하기
            </Button>
          </ButtonGroup>
        </PaymentLayout>
      </Content>
    </PaymentContainer>
  );
}

export default PaymentPage;
