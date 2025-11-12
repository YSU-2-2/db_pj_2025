import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productsSlice';
import Navbar from '../components/Navbar';
import './css/MainPage.css';

function MainPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux에서 상품 데이터 가져오기
  const { items: products, loading, error } = useSelector((state) => state.products);

  // 컴포넌트 마운트 시 상품 데이터 가져오기
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // 추천 상품 (처음 3개만)
  const recommendedProducts = products.slice(0, 3);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // 로딩 중일 때
  if (loading) {
    return (
      <div className="main-container">
        <Navbar />
        <div className="main-content-wrapper">
          <h1 className="main-title">추천 상품</h1>
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  // 에러 발생 시
  if (error) {
    return (
      <div className="main-container">
        <Navbar />
        <div className="main-content-wrapper">
          <h1 className="main-title">추천 상품</h1>
          <p>에러 발생: {error}</p>
        </div>
      </div>
    );
  }

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
