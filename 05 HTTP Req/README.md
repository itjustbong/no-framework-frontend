# HTTP 요청

## 서론

- FE 애플리케이션은 서버의 비동기 데이터 요청을 통해 데이터를 가져옴
- HTTP 클라이언트를 구축하는 방법 🔎
- 간단 역사 - AJAX의 탄생
  - 1999년 이전에는 데이터를 업데이트 하려면 전체 페이지를 다시 내려받아야 했음
  - 비동기 자바스크립트 XML (Asynchronous JavaScript and XML) : AJAX
  - AJAX의 핵심은 XMLHttpRequest 임
  - 과거에는 JSON 이 아니라 XML 데이터를 주고 받았음

## 개념

### REST란

- REpresentational State Transfer
- 데이터 업데이트 PATCH : 데이터의 일부만 업데이트
- 데이터 교체 PUT : 데이터 전체를 교체

### todos 모델

- 하기와 같이 `TodoWithXMLHttpRequest` 에서의 컨트롤러는 HTTP 클라이언트를 직접 이용하지 않고, todos 모델 객체에 래핑했음
  - for 테스트 가능성
  - for 가독성

```typescript
const list = () => http.get(BASE_URL);
await todos.list();
```

### XMLHttpRequest

- 비동기 HTTP 요청의 표준 방법을 정의한 첫 번째 시도
- HTTP 클라이언트 핵심은 request 메서드
  - 완료된 요청 -> onload 콜백
  - 에러 -> onerror 콜백
  - 타임아웃 된 요청 -> ontimeout 콜백
- 공개 API는 프로미스를 기반으로 함

  - `request` 메서드는 프로미스를 반환
  - `request` 메서드는 `XMLHttpRequest` 객체를 반환
  - `XMLHttpRequest` 객체는 `request` 메서드가 반환한 프로미스를 resolve 하거나 reject 함

- XMLHttpRequest를 사용한 HTTP 요청의 흐름
  - 1. 새로운 `XMLHttpRequest` 객체를 생성
  - 2. 특정 URL로 요청 초기화
  - 3. 요청 구성
  - 4. 요청 전송
  - 5. 요청 완료 시 콜백 실행
    - a. 요청이 성공적으로 완료되면 `onload` 콜백 실행
    - b. 요청이 실패하면 `onerror` 콜백 실행
    - c. 요청이 타임아웃되면 `ontimeout` 콜백 실행

```typescript
const request = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(JSON.stringify(data));
  });
};
```

### fetch

- 원격 리소스에 접근하고자 만들어진 API
- 해당 API의 목적은 Req나 Res 같은 많은 네트워크 객체에 대한 표준 정의를 제공하는 것
- fetch는 Promise 객체를 반환하기 때문에, 가독성이 좋음
  - 전통적인 콜백 기반의 XMLHttpRequest 접근 방식을 최신 프로미스 기반으로 변환함
  - 보일러플레이트 필요 X
- 수신된 객체는 데이터 형식에 따라 text(), blob(), json() 등의 메서드를 사용
  - 실제 애플리케이션에서는 Content-Type 헤더를 확인하고, 적절한 메서드를 사용해야 함

### axios

- axios의 API는 프로미스 기반으로 하고 있음
- 타 방식과 달리 Node 환경에서 사용가능

## 마무리

- 구현이 아닌 인터페이스로 프로그래밍하라
- 모델 객체에서 axios를 사용핟나는 것은 인터페이스가 아닌 구현을 프로그래밍 하는 것을 의미함
  - http 클라이언트를 만들고 활용하라는 뜻
- 라이브러리를 사용할 때는 인터페이스 생성을 항상 염두하자
- axios는 다른 방식과 달리 어느 정도의 보안 장치가 내장되어 있다
