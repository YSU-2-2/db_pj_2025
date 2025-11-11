import React from 'react';
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
  text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #666;
  font-size: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProductDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const ProductPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a9eff;
`;

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
    <Container>
      <Navbar />
      <ContentWrapper>
        <Title>추천 상품</Title>
        <ProductGrid>
          {recommendedProducts.map(product => (
            <ProductCard key={product.id} onClick={() => handleProductClick(product.id)}>
              <ProductImage>상품 이미지</ProductImage>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ContentWrapper>
    </Container>
  );
}

export default MainPage;
