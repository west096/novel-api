//서버 실행만 담당
const app = require('./app');
const port = 3000;

app.listen(port, () =>{
  console.log(`✅ 서버 실행 중: http://localhost:${port}`);
});