# 📚 웹소설 기획서 API 문서

Node.js + Express로 구현한 간단한 RESTful API입니다.  
웹소설 기획서를 추가/조회/수정/삭제할 수 있으며, 데이터는 JSON 파일로 로컬에 저장됩니다.

---

## 🛠 기술 스택

- Node.js
- Express.js
- fs 모듈 (파일 입출력)
- REST API 설계
- Postman (API 테스트 도구)

---

## 📌 API 엔드포인트 요약

| 메서드  |      경로       |       설명        |
|--------|----------------|-------------------|
| GET    | /plans         | 기획서 전체 조회    |
| POST   | /plans         | 기획서 추가        |
| PUT    | /plans/:id     | 특정 기획서 수정    |
| DELETE | /plans/:id     | 특정 기획서 삭제    |

---

## 🔍 상세 설명

### ✅ GET /plans

웹소설 기획서 전체 목록을 조회합니다.

- **응답 예시:**

```json
[
  {
    "id": 1,
    "title": "회귀한 황녀의 사생활",
    "genre": "로판"
  }
]
```

### ✅ POST /plans

새로운 기획서를 추가합니다.

- **요청 예시:**
```json
{
    "title": "고양이와 황제",
    "genre": "BL"
}
```

- **성공 시 응답(201):**
```json
{
    "id":2,
    "title": "고양이와 황제",
    "genre": "BL"
}
```

- **오류 예시(400):**
```json
{
    "error": "title과 genre는 필수입니다."
}
```

### ✅ PUT /plans/:id

기존 기획서를 수정합니다.

- **요청 예시:**
```json
{
    "title": "바뀐 제목",
    "genre": "로맨스"
}
```

- **응답 예시:**
```json
{
    "id": 1,
    "title": "바뀐제목",
    "genre": "로맨스"
}
```

- **오류 예시(404):**
```json
{
    "error": "기획서를 찾을 수 없습니다."
}
```

### ✅ DELETE /plans/:id

특정 기획서를 삭제합니다.

- **요청 예시:**
```json
{
  "id": 2,
  "title": "고양이와 황제",
  "genre": "BL"
}
```

- **응답 예시:**
```json
{
  "message": "ID가 2인 기획서가 삭제되었습니다.",
  "deleted": {
      "id": 2,
      "title": "고양이와 황제",
      "genre": "BL"
  }
}
```

- **오류 예시(404):**
```json
{
    "error": "기획서를 찾을 수 없습니다."
}
```

### 📁 데이터 구조(plans.json)
데이터는 plans.json파일에 배열 형태로 저장됩니다.

```json
[
  {
    "id": 1,
    "title": "회귀한 황녀의 사생활",
    "genre": "로판"
  },
  {
    "id": 2,
    "title": "고양이와 황제",
    "genre": "BL"
  },
  {
    "id": 3,
    "title": "전지적 독자시점",
    "genre": "현판"
  },
  {
    "id": 4,
    "title": "환생한 여왕님은 집순이",
    "genre": "로판"
  }
]
```

## 🧪 테스트 방법

### 1. 프로젝트 루트에서 의존성 설치:
```bash
npm install
```

### 2. 서버 실행:
```bash
node index.js
```

### 3. Postman 또는 브라우저에서 아래 주소로 API 테스트:
- **전체 목록 조회: http://localhost:3000/plans**

- **기획서 추가 (POST): http://localhost:3000/plans**

- **기획서 수정 (PUT): http://localhost:3000/plans/:id**

- **기획서 삭제 (DELETE): http://localhost:3000/plans/:id**

---
## 👩‍💻 개발자 정보
- **이름: 하서영**

- **GitHub: https://github.com/west096**

- **프로젝트 시작일: 2025년 7월 12일**

- **목적: 백엔드 실습 및 포트폴리오 구축**