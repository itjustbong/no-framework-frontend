# 기본 이벤트 처리 아키텍처

- 렌더링 엔진은 상태를 가져오고 DOM 트리를 생성하는 순수함수 기반
- 새로운 상태 -> 새로운 DOM 트리 -> 가상 DOM 알고리즘 적용
- 모든 이벤트 이후, 상태가 변경된 이후, 메인 렌더링 함수를 호출

# 코드

- 앱에서 발생할 수 있는 이벤트를 사전에 정의하고,
  해당 이벤트들에 수동으로 `render()` 함수를 호출함
- app 레지스트리는 어떤 로직을 위해 존재
  - todo 추가 등
