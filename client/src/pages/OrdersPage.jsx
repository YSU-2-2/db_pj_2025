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

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const OrderCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const OrderDate = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const OrderNumber = styled.div`
  font-size: 0.9rem;
  color: #999;
`;

const OrderStatus = styled.span`
  padding: 0.5rem 1rem;
  background-color: ${props => {
    switch (props.status) {
      case '배송완료': return '#4caf50';
      case '배송중': return '#2196f3';
      case '결제완료': return '#ff9800';
      default: return '#999';
    }
  }};
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const OrderItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.7rem;
  flex-shrink: 0;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ItemDetail = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const ItemPrice = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const OrderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const TotalPrice = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #4a9eff;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: ${props => props.variant === 'secondary' ? '#666' : '#4a9eff'};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.variant === 'secondary' ? '#555' : '#3a8eef'};
  }
`;

const EmptyOrders = styled.div`
  background: white;
  border-radius: 8px;
  padding: 4rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const EmptyMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
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

function OrdersPage() {
  const navigate = useNavigate();

  // TODO: 실제로는 API에서 주문 데이터를 가져와야 함
  const orders = [
    {
      id: '20250111001',
      date: '2025-01-11',
      status: '배송완료',
      items: [
        { name: '가구 상품 1', quantity: 1, price: 29900 },
        { name: '가구 상품 2', quantity: 2, price: 39900 }
      ],
      totalPrice: 112700
    },
    {
      id: '20250110001',
      date: '2025-01-10',
      status: '배송중',
      items: [
        { name: '가구 상품 3', quantity: 1, price: 49900 }
      ],
      totalPrice: 49900
    },
    {
      id: '20250109001',
      date: '2025-01-09',
      status: '결제완료',
      items: [
        { name: '가구 상품 4', quantity: 1, price: 99900 }
      ],
      totalPrice: 99900
    }
  ];

  const handleViewDetail = (orderId) => {
    // TODO: 주문 상세 페이지로 이동
    alert(`주문번호 ${orderId}의 상세 정보를 조회합니다.`);
  };

  const handleReorder = (orderId) => {
    // TODO: 재주문 로직 구현
    alert('장바구니에 상품이 추가되었습니다.');
    navigate('/cart');
  };

  return (
    <Container>
      <Navbar />
      <ContentWrapper>
        <Title>주문 내역</Title>
        {orders.length === 0 ? (
          <EmptyOrders>
            <EmptyMessage>주문 내역이 없습니다.</EmptyMessage>
            <GoShoppingButton onClick={() => navigate('/')}>
              쇼핑하러 가기
            </GoShoppingButton>
          </EmptyOrders>
        ) : (
          <OrderList>
            {orders.map(order => (
              <OrderCard key={order.id}>
                <OrderHeader>
                  <div>
                    <OrderDate>{order.date}</OrderDate>
                    <OrderNumber>주문번호: {order.id}</OrderNumber>
                  </div>
                  <OrderStatus status={order.status}>{order.status}</OrderStatus>
                </OrderHeader>
                <OrderItems>
                  {order.items.map((item, index) => (
                    <OrderItem key={index}>
                      <ItemImage>상품 이미지</ItemImage>
                      <ItemInfo>
                        <ItemName>{item.name}</ItemName>
                        <ItemDetail>수량: {item.quantity}개</ItemDetail>
                      </ItemInfo>
                      <ItemPrice>{(item.price * item.quantity).toLocaleString()}원</ItemPrice>
                    </OrderItem>
                  ))}
                </OrderItems>
                <OrderFooter>
                  <TotalPrice>총 {order.totalPrice.toLocaleString()}원</TotalPrice>
                  <ActionButtons>
                    <Button onClick={() => handleViewDetail(order.id)}>주문 상세</Button>
                    <Button variant="secondary" onClick={() => handleReorder(order.id)}>
                      재주문
                    </Button>
                  </ActionButtons>
                </OrderFooter>
              </OrderCard>
            ))}
          </OrderList>
        )}
      </ContentWrapper>
    </Container>
  );
}

export default OrdersPage;
