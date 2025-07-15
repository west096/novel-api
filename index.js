const express = require('express');
const app = express();
const port = 3000;

const plansRouter = require('./routes/plans');

app.use(express.json());

// /plans로 들어온 요청은 plansRouter에서 처리
app.use('/plans', plansRouter);

app.listen(port, () =>{
  console.log(`✅ 서버 실행 중: http://localhost:${port}`);
});