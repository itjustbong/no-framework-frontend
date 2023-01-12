import todosView from './todos.js';
import counterView from './counter.js';
import filtersView from './filters.js';

export default (targetElement, state) => {
  const element = targetElement.cloneNode(true);

  const list = element.querySelector('.todo-list');
  const counter = element.querySelector('.todo-count');
  const filters = element.querySelector('.filters');

  // 기존의 거대한 함수를 밖으로 뺐음
  // 각각의 뷰함수 내부에서도 돔을 복제하여 사용하고, 변경 값을 리턴함
  list.replaceWith(todosView(list, state));
  counter.replaceWith(counterView(counter, state));
  filters.replaceWith(filtersView(filters, state));

  // 이 친구도 복제품 조지고 다시 리턴함
  return element;
};
