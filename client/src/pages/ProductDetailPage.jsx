import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // TODO: 실제 데이터는 나중에 API에서 가져올 예정
  const productData = {
    id: id,
    name: `가구 상품 ${id}`,
    price: `${parseInt(id) * 10 + 29},900원`,
    description: '고급스러운 디자인과 뛰어난 품질을 자랑하는 가구입니다. 편안함과 스타일을 동시에 만족시키는 제품으로, 어떤 공간에도 잘 어울립니다.',
    specs: [
      { label: '재질', value: '천연 원목' },
      { label: '색상', value: '브라운' },
      { label: '크기', value: '가로 120cm x 세로 80cm x 높이 75cm' },
      { label: '원산지', value: '대한민국' },
      { label: '제조사', value: '가구쇼핑몰' }
    ]
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
      return;
    }
    // TODO: 장바구니 추가 로직 구현
    alert('장바구니에 추가되었습니다!');
  };

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
      return;
    }
    // TODO: 바로 구매 로직 구현
    navigate('/checkout');
  };

  return (
    <div className="product-detail-container">
      <Navbar />
      <div className="product-detail-content-wrapper">
        <button className="back-button" onClick={() => navigate(-1)}>← 뒤로 가기</button>
        <div className="product-detail-box">
          <div className="product-layout">
            <div className="product-image-section">
              <div className="product-detail-image">상품 이미지</div>
            </div>
            <div className="product-info-section">
              <h1 className="product-detail-name">{productData.name}</h1>
              <div className="product-detail-price">{productData.price}</div>
              <hr className="product-divider" />
              <div className="product-detail-description">{productData.description}</div>
              <hr className="product-divider" />
              <div className="product-specs">
                {productData.specs.map((spec, index) => (
                  <div key={index} className="spec-item">
                    <span className="spec-label">{spec.label}:</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
              <div className="button-group">
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                  장바구니 담기
                </button>
                <button className="buy-now-button" onClick={handleBuyNow}>
                  바로 구매
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
