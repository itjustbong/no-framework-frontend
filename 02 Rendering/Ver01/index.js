import getTodos from './getTodos.js';
import view from './view.js';

const state = {
  todos: getTodos(),
  currentFilter: 'All',
};

const main = document.querySelector('.todoapp');

// https://velog.io/@0715yk/HTML-requestAnimationFrame
// requestAnimationFrame 이 왜 더 좋은지 알아보기
window.requestAnimationFrame(() => {
  // view에서는 '.todo-list'가 데이터에 맞춰서 바뀌어 버린 노드임
  const newMain = view(main, state);
  // 그리고 바뀌어버린 DOM 을 기존의 위치에 덮어 붙여버림
  main.replaceWith(newMain);
});
