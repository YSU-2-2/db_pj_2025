import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ContentWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
`;

const LoginBox = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 4rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #4a9eff;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #4a9eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &:hover {
    background-color: #3a8eef;
  }
`;

const LinkText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #666;
`;

const StyledLink = styled(Link)`
  color: #4a9eff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: 실제로는 API 호출로 인증해야 함
    // 지금은 임시로 이메일만 있으면 로그인 성공으로 처리
    if (email && password) {
      dispatch(login({
        email: email,
        name: email.split('@')[0]
      }));
      alert('로그인 성공!');
      navigate('/');
    } else {
      alert('이메일과 비밀번호를 입력해주세요.');
    }
  };

  return (
    <Container>
      <Navbar />
      <ContentWrapper>
        <LoginBox>
          <Title>로그인</Title>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                required
              />
            </InputGroup>
            <Button type="submit">로그인</Button>
          </Form>
          <LinkText>
            계정이 없으신가요? <StyledLink to="/signup">회원가입</StyledLink>
          </LinkText>
        </LoginBox>
      </ContentWrapper>
    </Container>
  );
}

export default LoginPage;
