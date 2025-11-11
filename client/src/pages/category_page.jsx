import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const CategoryContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  padding-top: 70px;
`;

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #6c757d;
`;

const FilterSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
`;

const FilterLabel = styled.span`
  font-weight: 600;
  color: #2c3e50;
  font-size: 16px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid ${props => props.$active ? '#667eea' : '#e9ecef'};
  background: ${props => props.$active ? '#667eea' : 'white'};
  color: ${props => props.$active ? 'white' : '#6c757d'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    color: ${props => props.$active ? 'white' : '#667eea'};
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 220px;
  background: ${props => props.$bgColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductCategory = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: #e9ecef;
  color: #6c757d;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #667eea;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: #6c757d;
  font-size: 18px;
`;

function CategoryPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = ['전체', '오디오', '웨어러블', '액세서리', '스마트홈'];

  const allProducts = [
    {
      id: 1,
      name: '프리미엄 무선 이어폰',
      category: '오디오',
      price: '129,000원',
      emoji: '🎧',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      name: '스마트 워치',
      category: '웨어러블',
      price: '299,000원',
      emoji: '⌚',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      name: '휴대용 블루투스 스피커',
      category: '오디오',
      price: '89,000원',
      emoji: '🔊',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      name: '무선 충전기',
      category: '액세서리',
      price: '45,000원',
      emoji: '⚡',
      bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 5,
      name: '스마트 조명',
      category: '스마트홈',
      price: '79,000원',
      emoji: '💡',
      bgColor: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 6,
      name: '게이밍 헤드셋',
      category: '오디오',
      price: '159,000원',
      emoji: '🎮',
      bgColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 7,
      name: '피트니스 밴드',
      category: '웨어러블',
      price: '69,000원',
      emoji: '💪',
      bgColor: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      id: 8,
      name: '스마트 플러그',
      category: '스마트홈',
      price: '29,000원',
      emoji: '🔌',
      bgColor: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    }
  ];

  const filteredProducts = selectedCategory === '전체'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const handleProductClick = (productId) => {
    navigate(`/detail/${productId}`);
  };

  return (
    <CategoryContainer>
      <Navbar />
      <Content>
        <Header>
          <Title>상품 카테고리</Title>
          <Subtitle>원하는 카테고리의 상품을 찾아보세요</Subtitle>
        </Header>

        <FilterSection>
          <FilterLabel>카테고리:</FilterLabel>
          {categories.map((category) => (
            <FilterButton
              key={category}
              $active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterSection>

        {filteredProducts.length > 0 ? (
          <ProductGrid>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                <ProductImage $bgColor={product.bgColor}>
                  {product.emoji}
                </ProductImage>
                <ProductInfo>
                  <ProductCategory>{product.category}</ProductCategory>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
        ) : (
          <EmptyState>
            해당 카테고리에 상품이 없습니다.
          </EmptyState>
        )}
      </Content>
    </CategoryContainer>
  );
}

export default CategoryPage;
