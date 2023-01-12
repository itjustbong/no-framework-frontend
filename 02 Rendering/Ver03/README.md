## 코드리뷰

- 구성 요소 라이브러리 도입 for 자동 업데이트
  - data-component 요소 추가
  - 레지스트리 기능 도입
- 핵심 요소 설명
  - `registry.add(name, component)`
    - 자바스크립트 일반 객체로 구현된, 레지스트리에 렌더링 함수(뷰)추가
  - `registry.renderRoot(main, state)`
    - main 돔을 state에 맞춰서 업데이트 함
    - "[data-component]"가 있는 모든 요소(자식 요소 포함)을 업데이트 함
      단, 사전에 add를 통해서 렌더링 함수를 등록했어야 함.

## 다음 개선

- diff 알고리즘 구현해보자
