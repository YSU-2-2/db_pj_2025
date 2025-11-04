const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello World' });
});

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


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
