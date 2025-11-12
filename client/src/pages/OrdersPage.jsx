import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './css/OrdersPage.css';

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
    <div className="orders-container">
      <Navbar />
      <div className="orders-content-wrapper">
        <h1 className="orders-title">주문 내역</h1>
        {orders.length === 0 ? (
          <div className="empty-orders">
            <p className="empty-message">주문 내역이 없습니다.</p>
            <button className="go-shopping-btn" onClick={() => navigate('/')}>
              쇼핑하러 가기
            </button>
          </div>
        ) : (
          <div className="order-list">
            {orders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div>
                    <div className="order-date">{order.date}</div>
                    <div className="order-number">주문번호: {order.id}</div>
                  </div>
                  <span className={`order-status ${order.status}`}>{order.status}</span>
                </div>
                <div className="order-items">
                  {order.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <div className="order-item-image">상품 이미지</div>
                      <div className="order-item-info">
                        <div className="order-item-name">{item.name}</div>
                        <div className="order-item-detail">수량: {item.quantity}개</div>
                      </div>
                      <div className="order-item-price">{(item.price * item.quantity).toLocaleString()}원</div>
                    </div>
                  ))}
                </div>
                <div className="order-footer">
                  <div className="order-total-price">총 {order.totalPrice.toLocaleString()}원</div>
                  <div className="action-buttons">
                    <button className="order-button" onClick={() => handleViewDetail(order.id)}>주문 상세</button>
                    <button className="order-button secondary" onClick={() => handleReorder(order.id)}>
                      재주문
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrdersPage;
