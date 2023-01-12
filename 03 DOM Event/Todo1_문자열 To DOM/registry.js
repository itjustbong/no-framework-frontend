// {todos : todosView, counters: counterView, filters: filtersView}
// 레지스트리 키 값은 data component 속성 값과 일치한다!
// 이것이 구성 요소 기반 렌더링 엔진의 핵심!
// 장점: 모든 구성 요소가 다른 요소 안에서 사용될 수 있음!
//    : 재상용성은 구성요소 기반 애플리케이션에서 필수적
// 원하는 바를 구현하려면,
// 모든 구성 요소가 data-component 속성 값을 읽고 올바른 함수를 자동을 호출하는 기본 구성 요소에서 상속되어야 함.
// 단, 순수 함수로 대부분의 코드를 작성하고 있어서, 상속대신 고차함수를 활용함.
const registry = {};

// 고차 함수
// component는 변경하고자 하는 DOM 루트
// component는 listView 같은 녀석이며,
// listView는 타겟 엘리먼트와, 데이터를 전달 받아서 새로운 DOM을 생성함
// 1. component -> 노드를 클론하는 함수
const renderWrapper = (component) => {
  // 또 다른 함수를 리턴
  // 정확히는 뷰 함수
  return (targetElement, state) => {
    // state가 반영된 targetElement를 반환함
    // 만약에 state를 받지 않는 녀석이라면? 그냥 클론만해서 받아오면 돼
    const element = component(targetElement, state);

    // 새로운 DOM 자식 중에서
    // data-component 속성을 가진 모든 DOM 요소를 찾음
    const childComponents = element.querySelectorAll('[data-component]');

    Array.from(childComponents).forEach((target) => {
      // 새롭게 생성될 DOM의 자식 중에,
      // data-component 의 속성 값을 확인
      const name = target.dataset.component;

      // 이미 레지스트리에 동일한 이름을 가지는 녀석이 있는지 확인
      const child = registry[name];
      // 동일한 자식이 없으면 ㅃ
      if (!child) {
        return;
      }

      // 동일한 자식 구성 요소는 동일한 함수로 래핑된다
      target.replaceWith(child(target, state));
    });

    // 자식 요소까지 모두 변해버린 element를 반환
    return element;
  };
};

// registry.add('todos', todosView); 와 같이 외부에서 사용함
const add = (name, component) => {
  // 레지스트리에 컴포넌트를 래핑한 함수 저장
  // renderWrapper에서는 함수 리턴
  registry[name] = renderWrapper(component);
};

// 최초 DOM요소에서 렌더링을 시작 점인,
// 애플리케이션 루트를 렌더링 하는 메서드
const renderRoot = (root, state) => {
  // 그냥 root 클론하는 함수
  const cloneComponent = (root) => {
    // cloneComponent는 인자를 두개 받을 수 있지만,
    // 그냥 root만 받음
    return root.cloneNode(true);
  };

  // renderWrapper는 자식까지 파고 들어가서,
  // cloneComponent가 어떻게
  // component(targetElement, state) 가능함?
  // cloneComponent는 인자를 두개 받을 수 있지만,
  // 그냥 root만 받음
  return renderWrapper(cloneComponent)(root, state);
};

// app과 renderRoot 메서드는 구성 요소 레지스트리의 공유 인터페이스임!
export default {
  add,
  renderRoot,
};
