import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const DetailContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  padding-top: 70px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const BackButton = styled.button`
  padding: 12px 24px;
  background: white;
  border: 2px solid #667eea;
  color: #667eea;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: #667eea;
    color: white;
  }
`;

const ProductDetailCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const ProductImageSection = styled.div`
  background: ${props => props.$bgColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  font-size: 180px;

  @media (max-width: 968px) {
    min-height: 350px;
    font-size: 120px;
  }
`;

const ProductInfoSection = styled.div`
  padding: 60px 40px;

  @media (max-width: 968px) {
    padding: 40px 30px;
  }
`;

const ProductCategory = styled.span`
  display: inline-block;
  padding: 8px 16px;
  background: #e9ecef;
  color: #6c757d;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ProductTitle = styled.h1`
  font-size: 42px;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 968px) {
    font-size: 32px;
  }
`;

const ProductPrice = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 30px;

  @media (max-width: 968px) {
    font-size: 28px;
  }
`;

const ProductDescription = styled.p`
  font-size: 18px;
  color: #6c757d;
  line-height: 1.8;
  margin-bottom: 40px;
`;

const ProductFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
`;

const FeatureItem = styled.li`
  font-size: 16px;
  color: #495057;
  padding: 12px 0;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;

  &:before {
    content: '✓';
    color: #667eea;
    font-weight: 700;
    margin-right: 12px;
    font-size: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  flex: 1;
  padding: 18px 32px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  ${props => props.$variant === 'primary' ? `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    }
  ` : `
    background: white;
    color: #667eea;
    border: 2px solid #667eea;

    &:hover {
      background: #f8f9fa;
    }
  `}
`;

const ReviewSection = styled.div`
  margin-top: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 30px;
`;

const ReviewCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ReviewAuthor = styled.span`
  font-weight: 600;
  color: #2c3e50;
`;

const ReviewRating = styled.span`
  color: #ffc107;
  font-size: 18px;
`;

const ReviewText = styled.p`
  color: #6c757d;
  line-height: 1.6;
`;

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 샘플 상품 데이터 (실제로는 API에서 가져와야 함)
  const products = {
    1: {
      name: '프리미엄 무선 이어폰',
      category: '오디오',
      price: '129,000원',
      description: '뛰어난 음질과 긴 배터리 수명을 자랑하는 최신형 무선 이어폰입니다. 액티브 노이즈 캔슬링 기능으로 외부 소음을 차단하고, 몰입감 있는 청취 경험을 제공합니다.',
      emoji: '🎧',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: [
        '액티브 노이즈 캔슬링',
        '최대 30시간 배터리',
        'IPX4 방수 등급',
        '빠른 충전 지원',
        'Bluetooth 5.3'
      ]
    },
    2: {
      name: '스마트 워치',
      category: '웨어러블',
      price: '299,000원',
      description: '건강 관리와 알림 기능이 탑재된 스타일리시한 스마트 워치입니다. 심박수, 수면 패턴, 운동 기록 등 다양한 건강 데이터를 추적하고 분석합니다.',
      emoji: '⌚',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: [
        '심박수 모니터링',
        '수면 추적',
        '50가지 운동 모드',
        '7일 배터리',
        '5ATM 방수'
      ]
    },
    3: {
      name: '휴대용 블루투스 스피커',
      category: '오디오',
      price: '89,000원',
      description: '강력한 사운드와 방수 기능을 갖춘 포터블 스피커입니다. 어디서든 최고의 음질로 음악을 즐기세요.',
      emoji: '🔊',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: [
        '360도 사운드',
        '24시간 재생',
        'IPX7 방수',
        'USB-C 충전',
        '스테레오 페어링'
      ]
    }
  };

  const product = products[id];

  const handleAddToCart = () => {
    alert('장바구니에 추가되었습니다!');
    navigate('/cart');
  };

  const handleBuyNow = () => {
    navigate('/payment');
  };

  if (!product) {
    return (
      <DetailContainer>
        <Navbar />
        <Content>
          <BackButton onClick={() => navigate(-1)}>← 돌아가기</BackButton>
          <h2>상품을 찾을 수 없습니다.</h2>
        </Content>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <Navbar />
      <Content>
        <BackButton onClick={() => navigate(-1)}>← 돌아가기</BackButton>

        <ProductDetailCard>
          <ProductImageSection $bgColor={product.bgColor}>
            {product.emoji}
          </ProductImageSection>

          <ProductInfoSection>
            <ProductCategory>{product.category}</ProductCategory>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>

            <ProductFeatures>
              {product.features.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </ProductFeatures>

            <ButtonGroup>
              <Button $variant="primary" onClick={handleBuyNow}>
                바로 구매
              </Button>
              <Button $variant="secondary" onClick={handleAddToCart}>
                장바구니 담기
              </Button>
            </ButtonGroup>
          </ProductInfoSection>
        </ProductDetailCard>

        <ReviewSection>
          <SectionTitle>상품 리뷰</SectionTitle>

          <ReviewCard>
            <ReviewHeader>
              <ReviewAuthor>김OO</ReviewAuthor>
              <ReviewRating>★★★★★</ReviewRating>
            </ReviewHeader>
            <ReviewText>
              정말 만족스러운 제품입니다! 음질도 좋고 디자인도 예쁘네요.
            </ReviewText>
          </ReviewCard>

          <ReviewCard>
            <ReviewHeader>
              <ReviewAuthor>이OO</ReviewAuthor>
              <ReviewRating>★★★★☆</ReviewRating>
            </ReviewHeader>
            <ReviewText>
              가격 대비 훌륭한 성능을 보여줍니다. 배터리도 오래가서 좋아요.
            </ReviewText>
          </ReviewCard>
        </ReviewSection>
      </Content>
    </DetailContainer>
  );
}

export default DetailPage;
