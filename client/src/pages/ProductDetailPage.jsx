import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

const BackButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #666;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 2rem;

  &:hover {
    background-color: #555;
  }
`;

const ProductDetailContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductImageSection = styled.div`
  width: 100%;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.2rem;
`;

const ProductInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProductName = styled.h1`
  font-size: 2rem;
  color: #333;
  margin: 0;
`;

const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #4a9eff;
`;

const ProductDescription = styled.div`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 1rem 0;
`;

const ProductSpecs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SpecItem = styled.div`
  display: flex;
  gap: 1rem;
`;

const SpecLabel = styled.span`
  font-weight: 600;
  color: #333;
  min-width: 100px;
`;

const SpecValue = styled.span`
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const AddToCartButton = styled.button`
  flex: 1;
  padding: 1rem;
  background-color: #4a9eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a8eef;
  }
`;

const BuyNowButton = styled.button`
  flex: 1;
  padding: 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #222;
  }
`;

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
    <Container>
      <Navbar />
      <ContentWrapper>
        <BackButton onClick={() => navigate(-1)}>← 뒤로 가기</BackButton>
        <ProductDetailContainer>
          <ProductLayout>
            <ProductImageSection>
              <ProductImage>상품 이미지</ProductImage>
            </ProductImageSection>
            <ProductInfoSection>
              <ProductName>{productData.name}</ProductName>
              <ProductPrice>{productData.price}</ProductPrice>
              <Divider />
              <ProductDescription>{productData.description}</ProductDescription>
              <Divider />
              <ProductSpecs>
                {productData.specs.map((spec, index) => (
                  <SpecItem key={index}>
                    <SpecLabel>{spec.label}:</SpecLabel>
                    <SpecValue>{spec.value}</SpecValue>
                  </SpecItem>
                ))}
              </ProductSpecs>
              <ButtonGroup>
                <AddToCartButton onClick={handleAddToCart}>
                  장바구니 담기
                </AddToCartButton>
                <BuyNowButton onClick={handleBuyNow}>
                  바로 구매
                </BuyNowButton>
              </ButtonGroup>
            </ProductInfoSection>
          </ProductLayout>
        </ProductDetailContainer>
      </ContentWrapper>
    </Container>
  );
}

export default ProductDetailPage;
