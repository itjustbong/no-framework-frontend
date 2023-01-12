## 코드리뷰

- Ver01 의 문제를 각각의 뷰함수로 나누어 문제를 해결
- 수동으로 코드를 호출하여 렌더링 하고 있음
  - 무조건 첫 실행시에만 작동함
- 메인 index.js 에서 뷰 함수에, 타겟 노드와 데이터를 전달함

## 다음 개선

- 구성 요소 레지스트리를 가지는 렌더링 엔진을 만들자
- 특정 사례에서 사용할 구성 요소를 선언하는 방법을 정의 하는 것
  - 예제에서는 특정 사례가 todos, counters, filters 가 있음