import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './css/ProductsPage.css';

function ProductsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = ['전체', '소파', '침대', '책상', '의자', '수납장'];

  // TODO: 실제로는 API에서 데이터를 가져와야 함
  const allProducts = [
    {
      id: 1,
      name: '모던 패브릭 소파',
      category: '소파',
      description: '편안한 착석감의 3인용 소파',
      price: '299,000'
    },
    {
      id: 2,
      name: '프리미엄 퀸 침대',
      category: '침대',
      description: '고급 원목 프레임의 퀸사이즈 침대',
      price: '459,000'
    },
    {
      id: 3,
      name: '심플 원목 책상',
      category: '책상',
      description: '실용적인 디자인의 학습용 책상',
      price: '189,000'
    },
    {
      id: 4,
      name: '에르고 오피스 체어',
      category: '의자',
      description: '인체공학적 설계의 사무용 의자',
      price: '229,000'
    },
    {
      id: 5,
      name: '북유럽 스타일 수납장',
      category: '수납장',
      description: '깔끔한 디자인의 5단 수납장',
      price: '159,000'
    },
    {
      id: 6,
      name: '코너 L자형 소파',
      category: '소파',
      description: '넓은 거실을 위한 L자형 소파',
      price: '549,000'
    },
    {
      id: 7,
      name: '킹사이즈 침대',
      category: '침대',
      description: '넓고 편안한 킹사이즈 침대',
      price: '689,000'
    },
    {
      id: 8,
      name: '스탠딩 높이조절 책상',
      category: '책상',
      description: '전동 높이조절 가능한 스탠딩 책상',
      price: '389,000'
    },
    {
      id: 9,
      name: '게이밍 체어',
      category: '의자',
      description: '장시간 사용에 최적화된 게이밍 의자',
      price: '279,000'
    },
    {
      id: 10,
      name: '슬라이딩 도어 수납장',
      category: '수납장',
      description: '공간 절약형 슬라이딩 수납장',
      price: '349,000'
    }
  ];

  const filteredProducts = selectedCategory === '전체'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="products-container">
      <Navbar />
      <div className="products-content-wrapper">
        <h1 className="products-title">가구 상품</h1>
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {filteredProducts.length === 0 ? (
          <div className="no-products">해당 카테고리에 상품이 없습니다.</div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="products-card" onClick={() => handleProductClick(product.id)}>
                <div className="products-image">상품 이미지</div>
                <div className="products-category">{product.category}</div>
                <h3 className="products-name">{product.name}</h3>
                <p className="products-description">{product.description}</p>
                <div className="products-price">{product.price}원</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
