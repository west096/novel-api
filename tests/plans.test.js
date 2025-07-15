const request = require('supertest');
const app = require('../app'); // 서버 진입점 파일명

describe('📘 웹소설 기획서 API 테스트', () => {
  // ✅ GET /plans
  test('GET /plans - 전체 기획서 목록을 응답해야 한다', async () => {
    const res = await request(app).get('/plans');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // ✅ POST /plans
  test('POST /plans - 새 기획서를 추가해야 한다', async () => {
    const newPlan = {
      title: 'POST 테스트 title',
      genre: 'POST 테스트 genre',
    };

    const res = await request(app)
      .post('/plans')
      .send(newPlan)
      .set('Content-Type', 'application/json');

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe(newPlan.title);
    expect(res.body.genre).toBe(newPlan.genre);
  });

  // ✅ PUT /plans/:id
  test('PUT /plans/2 - ID가 2인 기획서를 수정해야 한다', async () => {
    const updatedPlan = {
      title: 'PUT 테스트 title',
      genre: 'PUT 테스트 genre',
    };

    const res = await request(app)
      .put('/plans/2')
      .send(updatedPlan)
      .set('Content-Type', 'application/json');

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(updatedPlan.title);
    expect(res.body.genre).toBe(updatedPlan.genre);
  });


  // ✅ DELETE /plans/:id
  test('DELETE /plans/1 - ID가 1인 기획서를 삭제해야 한다', async () => {
    const res = await request(app).delete('/plans/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
  });
});
