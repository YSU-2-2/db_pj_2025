import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const OrderHistoryContainer = styled.div`
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

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const OrderCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-bottom: 20px;
  border-bottom: 2px solid #e9ecef;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const OrderInfo = styled.div``;

const OrderDate = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
`;

const OrderNumber = styled.div`
  font-size: 14px;
  color: #6c757d;
`;

const OrderStatus = styled.div`
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  background: ${props => {
    switch (props.$status) {
      case '배송완료': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case '배송중': return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
      case '준비중': return 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)';
      default: return '#e9ecef';
    }
  }};
  color: ${props => props.$status === '준비중' ? '#2c3e50' : 'white'};
`;

const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

const OrderItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background: ${props => props.$bgColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  flex-shrink: 0;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const ItemInfo = styled.div`
  font-size: 14px;
  color: #6c757d;
`;

const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #667eea;
  white-space: nowrap;
`;

const OrderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }
`;

const TotalAmount = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;

  span {
    color: #667eea;
    font-size: 24px;
    margin-left: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  ${props => props.$variant === 'primary' ? `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
  ` : `
    background: white;
    color: #667eea;
    border: 2px solid #667eea;

    &:hover {
      background: #f8f9fa;
    }
  `}
`;

const EmptyState = styled.div`
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

function OrderHistoryPage() {
  const navigate = useNavigate();

  // 샘플 주문 내역 데이터
  const orders = [
    {
      id: 'ORD-2025-001',
      date: '2025.11.10',
      status: '배송완료',
      items: [
        {
          id: 1,
          name: '프리미엄 무선 이어폰',
          quantity: 1,
          price: 129000,
          emoji: '🎧',
          bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }
      ],
      total: 132000
    },
    {
      id: 'ORD-2025-002',
      date: '2025.11.08',
      status: '배송중',
      items: [
        {
          id: 2,
          name: '스마트 워치',
          quantity: 1,
          price: 299000,
          emoji: '⌚',
          bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
          id: 3,
          name: '휴대용 블루투스 스피커',
          quantity: 1,
          price: 89000,
          emoji: '🔊',
          bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        }
      ],
      total: 391000
    },
    {
      id: 'ORD-2025-003',
      date: '2025.11.05',
      status: '준비중',
      items: [
        {
          id: 4,
          name: '무선 충전기',
          quantity: 2,
          price: 45000,
          emoji: '⚡',
          bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        }
      ],
      total: 93000
    }
  ];

  const formatPrice = (price) => {
    return price.toLocaleString() + '원';
  };

  const handleReview = (orderId) => {
    navigate(`/review?orderId=${orderId}`);
  };

  const handleTrackDelivery = (orderId) => {
    alert(`주문번호 ${orderId}의 배송을 조회합니다.`);
  };

  if (orders.length === 0) {
    return (
      <OrderHistoryContainer>
        <Navbar />
        <Content>
          <Title>주문 내역</Title>
          <EmptyState>
            <EmptyIcon>📦</EmptyIcon>
            <EmptyText>주문 내역이 없습니다</EmptyText>
            <ShopButton onClick={() => navigate('/category')}>
              쇼핑하러 가기
            </ShopButton>
          </EmptyState>
        </Content>
      </OrderHistoryContainer>
    );
  }

  return (
    <OrderHistoryContainer>
      <Navbar />
      <Content>
        <Title>주문 내역</Title>

        <OrderList>
          {orders.map((order) => (
            <OrderCard key={order.id}>
              <OrderHeader>
                <OrderInfo>
                  <OrderDate>{order.date}</OrderDate>
                  <OrderNumber>주문번호: {order.id}</OrderNumber>
                </OrderInfo>
                <OrderStatus $status={order.status}>{order.status}</OrderStatus>
              </OrderHeader>

              <OrderItems>
                {order.items.map((item) => (
                  <OrderItem key={item.id}>
                    <ItemImage $bgColor={item.bgColor}>
                      {item.emoji}
                    </ItemImage>
                    <ItemDetails>
                      <ItemName>{item.name}</ItemName>
                      <ItemInfo>수량: {item.quantity}개</ItemInfo>
                    </ItemDetails>
                    <ItemPrice>{formatPrice(item.price * item.quantity)}</ItemPrice>
                  </OrderItem>
                ))}
              </OrderItems>

              <OrderFooter>
                <TotalAmount>
                  총 결제 금액<span>{formatPrice(order.total)}</span>
                </TotalAmount>
                <ButtonGroup>
                  {order.status === '배송완료' && (
                    <Button $variant="primary" onClick={() => handleReview(order.id)}>
                      리뷰 작성
                    </Button>
                  )}
                  {order.status === '배송중' && (
                    <Button $variant="secondary" onClick={() => handleTrackDelivery(order.id)}>
                      배송 조회
                    </Button>
                  )}
                  <Button $variant="secondary" onClick={() => navigate(`/detail/${order.items[0].id}`)}>
                    상품 보기
                  </Button>
                </ButtonGroup>
              </OrderFooter>
            </OrderCard>
          ))}
        </OrderList>
      </Content>
    </OrderHistoryContainer>
  );
}

export default OrderHistoryPage;
