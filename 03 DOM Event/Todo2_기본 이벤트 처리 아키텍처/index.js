import todosView from './view/todos.js';
import counterView from './view/counter.js';
import filtersView from './view/filters.js';
import appView from './view/app.js';
import applyDiff from './applyDiff.js';

import registry from './registry.js';

// 로직 처리를 위해 존재하는 느낌의 app..
registry.add('app', appView);
registry.add('todos', todosView);
registry.add('counter', counterView);
registry.add('filters', filtersView);

const state = {
  todos: [],
  currentFilter: 'All',
};

// 이벤트는 상태를 수정하고,
// 새로운 렌더링을 수동으로 호출하고 있음
const events = {
  // 이벤트 종류들
  deleteItem: (index) => {
    state.todos.splice(index, 1);
    // 렌더링!
    render();
  },
  addItem: (text) => {
    state.todos.push({
      text,
      completed: false,
    });
    // 렌더링!
    render();
  },
};

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector('#root');

    const newMain = registry.renderRoot(main, state, events);

    applyDiff(document.body, main, newMain);
  });
};

render();
