import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const ReviewContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  padding-top: 70px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ReviewForm = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 30px;
  border-bottom: 2px solid #e9ecef;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  flex-shrink: 0;
`;

const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductName = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
`;

const ProductCategory = styled.div`
  font-size: 14px;
  color: #6c757d;
`;

const FormSection = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Star = styled.button`
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    transform: scale(1.2);
  }
`;

const RatingText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #667eea;
  margin-left: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 16px;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const ImageUploadSection = styled.div`
  margin-bottom: 30px;
`;

const ImageUploadArea = styled.div`
  border: 2px dashed #dee2e6;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    background: #f8f9ff;
  }
`;

const UploadIcon = styled.div`
  font-size: 48px;
  margin-bottom: 15px;
`;

const UploadText = styled.p`
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 5px;
`;

const UploadHint = styled.p`
  font-size: 14px;
  color: #adb5bd;
`;

const ImagePreview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const PreviewImage = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const CharCount = styled.div`
  text-align: right;
  font-size: 14px;
  color: #6c757d;
  margin-top: 8px;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  padding: 18px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
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

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
  ` : `
    background: white;
    color: #6c757d;
    border: 2px solid #dee2e6;

    &:hover {
      background: #f8f9fa;
    }
  `}
`;

function ReviewPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');

  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);

  const maxChars = 500;

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleImageUpload = () => {
    // 실제로는 파일 input을 통해 이미지 업로드
    // 여기서는 샘플 이미지 추가
    if (uploadedImages.length < 5) {
      setUploadedImages([...uploadedImages, { id: Date.now(), emoji: '📷' }]);
    }
  };

  const handleRemoveImage = (id) => {
    setUploadedImages(uploadedImages.filter(img => img.id !== id));
  };

  const handleSubmit = () => {
    if (rating === 0) {
      alert('별점을 선택해주세요.');
      return;
    }

    if (reviewText.trim().length < 10) {
      alert('리뷰 내용을 10자 이상 입력해주세요.');
      return;
    }

    alert('리뷰가 등록되었습니다!');
    navigate('/order-history');
  };

  const ratingLabels = {
    1: '별로예요',
    2: '그저 그래요',
    3: '괜찮아요',
    4: '좋아요',
    5: '최고예요!'
  };

  return (
    <ReviewContainer>
      <Navbar />
      <Content>
        <Title>리뷰 작성</Title>

        <ReviewForm>
          <ProductInfo>
            <ProductImage>🎧</ProductImage>
            <ProductDetails>
              <ProductName>프리미엄 무선 이어폰</ProductName>
              <ProductCategory>오디오 | 주문번호: {orderId || 'ORD-2025-001'}</ProductCategory>
            </ProductDetails>
          </ProductInfo>

          <FormSection>
            <Label>별점을 선택해주세요</Label>
            <RatingContainer>
              {[1, 2, 3, 4, 5].map((value) => (
                <Star
                  key={value}
                  onClick={() => handleRatingClick(value)}
                  onMouseEnter={() => setHoveredRating(value)}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  {value <= (hoveredRating || rating) ? '⭐' : '☆'}
                </Star>
              ))}
              {rating > 0 && <RatingText>{ratingLabels[rating]}</RatingText>}
            </RatingContainer>
          </FormSection>

          <FormSection>
            <Label>상품은 어떠셨나요?</Label>
            <TextArea
              placeholder="상품에 대한 솔직한 리뷰를 작성해주세요. (최소 10자 이상)"
              value={reviewText}
              onChange={(e) => {
                if (e.target.value.length <= maxChars) {
                  setReviewText(e.target.value);
                }
              }}
            />
            <CharCount>
              {reviewText.length} / {maxChars}
            </CharCount>
          </FormSection>

          <ImageUploadSection>
            <Label>사진 추가 (선택)</Label>
            <ImageUploadArea onClick={handleImageUpload}>
              <UploadIcon>📸</UploadIcon>
              <UploadText>사진을 추가해주세요</UploadText>
              <UploadHint>최대 5장까지 등록 가능합니다</UploadHint>
            </ImageUploadArea>

            {uploadedImages.length > 0 && (
              <ImagePreview>
                {uploadedImages.map((image) => (
                  <PreviewImage key={image.id}>
                    <RemoveImageButton onClick={() => handleRemoveImage(image.id)}>
                      ×
                    </RemoveImageButton>
                    <span style={{ position: 'absolute' }}>{image.emoji}</span>
                  </PreviewImage>
                ))}
              </ImagePreview>
            )}
          </ImageUploadSection>

          <ButtonGroup>
            <Button $variant="secondary" onClick={() => navigate(-1)}>
              취소
            </Button>
            <Button
              $variant="primary"
              onClick={handleSubmit}
              disabled={rating === 0 || reviewText.trim().length < 10}
            >
              리뷰 등록
            </Button>
          </ButtonGroup>
        </ReviewForm>
      </Content>
    </ReviewContainer>
  );
}

export default ReviewPage;
