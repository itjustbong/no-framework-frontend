# 프레임워크없는 프레임워크 개발

## 프로젝트 동기

<b> 🔥프론트엔드 공부라 말할 수 있는 공부를 하자🔥</b>

- 프론트엔드를 공부하는 것인지, 웹 프레임워크(리액트, 뷰 등)을 공부하는 것인지 모르겠음
- 어느 순간 실무에서는 퍼블리싱만 하고 있는 느낌이 들었음
- 프론트엔드 공부 뭐할꺼야 라는 질문에, `그래프QL 사용해보기` 등의 답변을 하는 내가 마음에 들지 않았음
- 내부 로직을 이론으로는 들었다 한들, 남에게 설명할 수 있는 수준이 아니었음
- 리액트만 다루다보니 시야가 너무 좁은 것 같다는 느낌을 받았음
  <br/>

## 프로젝트 목표

<b> 🔥해당 레포에서는 책 내용을 따라가며, 코드의 흐름을 시각화 합니다🔥</b>

- 📌 리액트, 뷰 등의 웹 프레임워크(라이브러리)에 의존적인 공부를 낮추는 것
- 📌 여러 프레임워크를 사용해보고, 각각의 장단점을 경험해보기
- 📌 프로젝트 시작시에, 근거를 기반으로 프론트 기술 스택을 선택할 수 있어야 함
- 📌 최종적으로, `세미-리액트` 를 만들어보고 그것을 기반으로 프로젝트를 해보는 것

### 📈 함께 성장

- 개발 커뮤니티를 통해 함께 성장하기
- 참여자들 의견을 모두 공유하며, 타 참여자들에게 새로운 관점을 제안해보기
- 격주 참여자들이 담당한 부분에 대해서 `코드잼-세미나` 진행하기

### 🧑🏻‍💻 결과 주도 프로젝트(스터디)

- 결과물이 없는 프로젝트는 의미가 없다..!
- 프레임워크 별 `투두앱`을 제작해보며, 각 프레임워크의 특징을 이해하자
- 기록을 남기며 부족한 점을 채우고, 나중에 다시 돌아와 내가 어떤 부분을 잘(혹은 잘 못)이해하고 있었는 지 파악하자

## 프로젝트 PREVIEW

### 📚 1장 프레임워크에 대한 이야기

- 자바스크립트 프레임워크의 간단한 역사를 살펴보고, 프론트엔드 생태계의 가치를 이야기함
- 기술 부채의 의미와 프레임워크와의 관계

### 📚 2장 렌더링

- FW 없이 렌더링 엔직 만들었음
- 간단한 구성 요소 레지스트리지 작성 법
- 가상 DOM 알고리즘을 사용하여 엔진 성능 향상을 시키는 방법도 알아봄

### 📚 3장 DOM 이벤트 관리

- DOM 이벤트 API의 몇 가지 기본 개념
- 이벤트 핸들러를 추가하고 삭제하는 방법
- 버블 단계와 캡처 단곈의 차이점
- 사용자 정의 이벤트를 생성하는 방법
- 성능을 위한 이벤트 위임 개념

### ❓ 4장 웹 구성요소

- 웹 구성 요소 표준의 메인 API 배움
- 사용자 정의 요소 API 살펴봄
- 웹 구성 요소를 기반으로 TODO MVC 새 버전 구축
  - 이 접근 방식과 렌더링 함수의 차이점을 알아봄
- 사라지는 프레임워크를 배우고, 스텐실.js를 사용하여 간단한 구성 요소를 작성함

### ❓ 5장 라우팅

- AJAX 의 등장과 가져온 변화
- HTTP 클라이언트 구현하는 3가지 방법
  - 표준 라이브러리 2가지(XMLHttpRequest, Fetch API)
  - Axios 오픈 프로젝트

### ❓ 6장 라우팅

- 단일 페이지 애플리케이션
- 클라이언트 측 라우팅 시스템 작성 2가지 방법
  - 프래그먼트 식별자 기반
  - 히스토리 API 기반
- 자바스크립트 라이브러리 (Navigo) 기반 라우터 작성

### ❓ 7장 상태관리

- 상태 관리와 클라이언트 사이의 중요성
- 상태 관리 전략 3가지
  - 모델 뷰 컨트롤러
  - 반응형 프로그래밍
  - 이벤트 버스

### ❓ 8장 적합한 작업을 위한 적합한 도구

- 의사 결정 원칙의 중요성
- 기술적 의사 결정의 안티패턴
- 프레임워크 업는 운동의 기본 원리 분석
- 기술적 결정을 내릴 때 도움되 되는 몇 가지 도구
