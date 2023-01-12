// 렌더링 함수
const getTodoElement = (todo) => {
  // todo 는 데이터를 가지고 있음
  // 정확히는 todo의 한 아이템 정보임!
  const { text, completed } = todo;

  //
  return `
  <li ${completed ? 'class="completed"' : ''}>
    <div class="view">
      <input 
        ${completed ? 'checked' : ''}
        class="toggle" 
        type="checkbox">
      <label>${text}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${text}">
  </li>`;
};

// 투두의 총 카운트 수
const getTodoCount = (todos) => {
  // 완료되지 않은 투두의 카운트
  const notCompleted = todos.filter((todo) => !todo.completed);

  // 두 번째 줄 첫번째
  const { length } = notCompleted;
  if (length === 1) {
    return '1 Item left';
  }

  return `${length} Items left`;
};

// 위의 두 함수를 바로 밖으로 빼지 않음
// 익명 함수를 빼버림
export default (targetElement, state) => {
  // 전체 상태에 관한 것.
  // 필터는 전체 완료 등
  const { currentFilter, todos } = state;

  const element = targetElement.cloneNode(true);

  // 위에서 만든 아이템 로우 만드는 녀석을 달아주면 될 듯 (Node 반환)
  const list = element.querySelector('.todo-list');
  // 위에서 만든 아이템 카운트 녀석 달아주면 될 듯 (문자열 반환)
  const counter = element.querySelector('.todo-count');
  const filters = element.querySelector('.filters');

  list.innerHTML = todos.map(getTodoElement).join('');
  counter.textContent = getTodoCount(todos);

  // 그냥 현재 필터에 class 하나 넣어주려고 만들어 둔거임.
  Array.from(filters.querySelectorAll('li a')).forEach((a) => {
    console.log(a);
    if (a.textContent === currentFilter) {
      a.classList.add('selected');
    } else {
      a.classList.remove('selected');
    }
  });

  // element은 클론노드임.
  // 즉 DOM 조작을 가상이었어
  // 리턴 한다고 해서 이 DOM 이 실제로 반영이 되지는 않아
  return element;
};
