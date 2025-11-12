import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './css/CheckoutPage.css';

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
    <div className="checkout-container">
      <Navbar />
      <div className="checkout-content-wrapper">
        <h1 className="checkout-title">주문/결제</h1>
        <div className="checkout-box">
          <div className="checkout-section">
            <h2 className="checkout-section-title">배송 정보</h2>
            <div className="info-row">
              <span className="info-label">받는 사람</span>
              <span className="info-value">{orderInfo.customerInfo.name}</span>
            </div>
            <div className="info-row">
              <span className="info-label">연락처</span>
              <span className="info-value">{orderInfo.customerInfo.phone}</span>
            </div>
            <div className="info-row">
              <span className="info-label">배송지</span>
              <span className="info-value">{orderInfo.customerInfo.address}</span>
            </div>
          </div>

          <div className="checkout-section">
            <h2 className="checkout-section-title">주문 상품</h2>
            {orderInfo.items.map((item, index) => (
              <div key={index} className="info-row">
                <span className="info-label">{item.name} x {item.quantity}</span>
                <span className="info-value">{(item.price * item.quantity).toLocaleString()}원</span>
              </div>
            ))}
          </div>

          <div className="checkout-section">
            <h2 className="checkout-section-title">결제 금액</h2>
            <div className="order-summary">
              <div className="checkout-summary-row">
                <span>상품 금액</span>
                <span>{orderInfo.totalPrice.toLocaleString()}원</span>
              </div>
              <div className="checkout-summary-row">
                <span>배송비</span>
                <span>{orderInfo.shippingFee.toLocaleString()}원</span>
              </div>
              <div className="checkout-total-row">
                <span>총 결제 금액</span>
                <span className="checkout-total-price">{finalTotal.toLocaleString()}원</span>
              </div>
            </div>
          </div>

          <button className="payment-button" onClick={handlePayment}>
            결제하기
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
