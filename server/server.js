// @ts-nocheck
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = process.env.PORT||5000;

// JSON pretty print 설정
app.set('json spaces', 2);

// Middleware
app.use(cors({
  origin: true, // 모든 origin 허용 (개발 중)
  credentials: true
}));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// API 목록 보기
app.get('/api', (req, res) => {
  const apiList = [];

  // Express의 라우터 스택에서 라우트 추출
  function extractRoutes(stack, basePath = '') {
    stack.forEach((layer) => {
      if (layer.route) {
        // 일반 라우트
        const methods = Object.keys(layer.route.methods).map(m => m.toUpperCase());
        apiList.push({
          method: methods.join(', '),
          path: basePath + layer.route.path,
          description: ''
        });
      } else if (layer.name === 'router' && layer.handle.stack) {
        // 중첩된 라우터
        extractRoutes(layer.handle.stack, basePath + (layer.regexp.source.match(/^\^\\(.*)\\\//)?.[1] || ''));
      }
    });
  }

  // app.router가 존재하면 사용, 아니면 app._router 사용
  const router = app.router || app._router;
  if (router && router.stack) {
    extractRoutes(router.stack);
  }

  res.json({
    message: 'API 목록',
    totalApis: apiList.length,
    apis: apiList
  });
});

//api 연결 테스트
// app.get('/api/test', (req, res) => {
//     res.json({ message: 'Hello World' });
// });

//데이터 받아오기 테스트
// app.get('/api/login/test', (req, res) => {
//     res.json({
//         message: 'GET 요청입니다. POST로 id와 pw를 보내주세요.'
//     });
// });

app.post('/api/login/test', (req, res) => {
  let { id, pw } = req.body;

  // 서버 터미널에 JSON 출력
  console.log(JSON.stringify({ recievedId: id, recievedPw: pw }));

  // 클라이언트에게 JSON 응답
  res.json({
      recievedId: id,
      recievedPw: pw
  });
});

// 테스트용 상품 데이터
app.get('/api/products', (req, res) => {
  console.log('상품 목록 요청 받음');
  res.json([
    {
      id: 1,
      name: '모던 패브릭 소파',
      category: '소파',
      description: '편안한 착석감의 3인용 소파',
      price: 299000
    },
    {
      id: 2,
      name: '프리미엄 퀸 침대',
      category: '침대',
      description: '고급 원목 프레임의 퀸사이즈 침대',
      price: 459000
    },
    {
      id: 3,
      name: '심플 원목 책상',
      category: '책상',
      description: '실용적인 디자인의 학습용 책상',
      price: 189000
    }
  ]);
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
