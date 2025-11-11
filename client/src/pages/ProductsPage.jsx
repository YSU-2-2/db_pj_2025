import { useState } from 'react';
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

const CategoryFilter = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.active ? '#4a9eff' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 2px solid ${props => props.active ? '#4a9eff' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #4a9eff;
    ${props => !props.active && 'background-color: #f0f8ff;'}
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
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
  font-size: 0.9rem;
`;

const ProductCategory = styled.div`
  font-size: 0.85rem;
  color: #4a9eff;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProductDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const ProductPrice = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #4a9eff;
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
  font-size: 1.1rem;
`;

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
    <Container>
      <Navbar />
      <ContentWrapper>
        <Title>가구 상품</Title>
        <CategoryFilter>
          {categories.map(category => (
            <CategoryButton
              key={category}
              active={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryFilter>
        {filteredProducts.length === 0 ? (
          <NoProducts>해당 카테고리에 상품이 없습니다.</NoProducts>
        ) : (
          <ProductGrid>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} onClick={() => handleProductClick(product.id)}>
                <ProductImage>상품 이미지</ProductImage>
                <ProductCategory>{product.category}</ProductCategory>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>{product.price}원</ProductPrice>
              </ProductCard>
            ))}
          </ProductGrid>
        )}
      </ContentWrapper>
    </Container>
  );
}

export default ProductsPage;
