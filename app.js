// api 정의만 담당. express()객체 생성과 라우팅만 처리. 서버 실행은 안함.
const express = require('express');

// /plans로 들어온 요청은 plansRouter에서 처리
const plansRouter = require('./routes/plans');

const app = express();

app.use(express.json());
app.use('/plans', plansRouter);

module.exports = app;