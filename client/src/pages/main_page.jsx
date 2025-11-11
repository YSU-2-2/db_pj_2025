import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const MainContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
`;

const Content = styled.div`
  padding-top: 70px; /* 네비게이션바 높이만큼 여백 */
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px);
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #6c757d;
  margin-bottom: 40px;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #6c757d;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  padding: 16px 48px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ProductSection = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  height: 250px;
  background: ${props => props.$bgColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
`;

const ProductInfo = styled.div`
  padding: 25px;
`;

const ProductName = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 15px;
  color: #6c757d;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #667eea;
`;

function MainPage() {
  const navigate = useNavigate();

  // 추천 상품 샘플 데이터
  const recommendedProducts = [
    {
      id: 1,
      name: '프리미엄 무선 이어폰',
      description: '뛰어난 음질과 긴 배터리 수명을 자랑하는 최신형 이어폰',
      price: '129,000원',
      emoji: '🎧',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      name: '스마트 워치',
      description: '건강 관리와 알림 기능이 탑재된 스타일리시한 스마트 워치',
      price: '299,000원',
      emoji: '⌚',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      name: '휴대용 블루투스 스피커',
      description: '강력한 사운드와 방수 기능을 갖춘 포터블 스피커',
      price: '89,000원',
      emoji: '🔊',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  const handleProductClick = (productId) => {
    navigate(`/detail/${productId}`);
  };

  return (
    <MainContainer>
      <Navbar />
      <Content>
        <HeroSection>
          <Title>환영합니다!</Title>
          <Subtitle>
            더 나은 경험을 위한 최고의 솔루션을 제공합니다.
            지금 바로 시작해보세요.
          </Subtitle>
          <CTAButton>시작하기</CTAButton>
        </HeroSection>

        {/* 추천 상품 섹션 */}
        <ProductSection>
          <SectionTitle>추천 상품</SectionTitle>
          <ProductGrid>
            {recommendedProducts.map((product) => (
              <ProductCard
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                <ProductImage $bgColor={product.bgColor}>
                  {product.emoji}
                </ProductImage>
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductDescription>{product.description}</ProductDescription>
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
        </ProductSection>

        <FeaturesContainer>
          <FeatureCard>
            <FeatureIcon>🚀</FeatureIcon>
            <FeatureTitle>빠른 성능</FeatureTitle>
            <FeatureDescription>
              최신 기술을 활용하여 빠르고 효율적인 서비스를 제공합니다.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🔒</FeatureIcon>
            <FeatureTitle>안전한 보안</FeatureTitle>
            <FeatureDescription>
              사용자의 데이터를 안전하게 보호하는 강력한 보안 시스템을 갖추고 있습니다.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>💡</FeatureIcon>
            <FeatureTitle>직관적인 UI</FeatureTitle>
            <FeatureDescription>
              누구나 쉽게 사용할 수 있는 직관적이고 세련된 사용자 인터페이스를 제공합니다.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesContainer>
      </Content>
    </MainContainer>
  );
}

export default MainPage;
