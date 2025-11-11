import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  const recommendedProducts = [
    {
      id: 1,
      name: '추천 상품 1',
      description: '이 상품은 가장 인기있는 상품입니다.',
      price: '29,900원'
    },
    {
      id: 2,
      name: '추천 상품 2',
      description: '신상품으로 많은 분들이 찾고 계십니다.',
      price: '39,900원'
    },
    {
      id: 3,
      name: '추천 상품 3',
      description: '베스트셀러 상품입니다.',
      price: '49,900원'
    }
  ];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className="main-content-wrapper">
        <h1 className="main-title">추천 상품</h1>
        <div className="product-grid">
          {recommendedProducts.map(product => (
            <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
              <div className="product-image">상품 이미지</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">{product.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
