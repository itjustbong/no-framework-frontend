import getTodos from './getTodos.js';
import todosView from './view/todos.js';
import counterView from './view/counter.js';
import filtersView from './view/filters.js';

import registry from './registry.js';

// registry에 각각의 전용 뷰 렌더링 함수들을 등록하고 있어
registry.add('todos', todosView);
registry.add('counter', counterView);
registry.add('filters', filtersView);

const state = {
  todos: getTodos(),
  currentFilter: 'All',
};

window.requestAnimationFrame(() => {
  const main = document.querySelector('.todoapp');
  // 레지스트리에서 렌더링
  // 요소 하나하나에 접근하여 변경하는 것이 아니고,
  // [data-component] 속성이 있는 모든 요소를 갈아끼우고,
  // 이거 하나면 모든 걸 재렌더링함
  const newMain = registry.renderRoot(main, state);
  main.replaceWith(newMain);
});
