import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './css/CartPage.css';

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
    <div className="cart-container">
      <Navbar />
      <div className="cart-content-wrapper">
        <h1 className="cart-title">장바구니</h1>
        <div className="cart-box">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p className="empty-cart-message">장바구니가 비어있습니다.</p>
              <button className="go-shopping-button" onClick={() => navigate('/')}>
                쇼핑 계속하기
              </button>
            </div>
          ) : (
            <>
              <div className="cart-item-list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">상품 이미지</div>
                    <div className="item-info">
                      <h3 className="item-name">{item.name}</h3>
                      <div className="item-price">{item.price.toLocaleString()}원</div>
                    </div>
                    <div className="item-actions">
                      <div className="quantity-control">
                        <button
                          className="quantity-button"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="quantity-button"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
                        삭제
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <div className="summary-row">
                  <span>상품 금액</span>
                  <span>{totalPrice.toLocaleString()}원</span>
                </div>
                <div className="summary-row">
                  <span>배송비</span>
                  <span>{shippingFee === 0 ? '무료' : `${shippingFee.toLocaleString()}원`}</span>
                </div>
                <div className="total-row">
                  <span>총 결제 금액</span>
                  <span className="total-price">{finalTotal.toLocaleString()}원</span>
                </div>
                <button className="checkout-button" onClick={handleCheckout}>
                  주문하기
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
