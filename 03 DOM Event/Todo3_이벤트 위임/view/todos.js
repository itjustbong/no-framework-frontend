let template;

const createNewTodoNode = () => {
  if (!template) {
    template = document.getElementById('todo-item');
  }

  return template.content.firstElementChild.cloneNode(true);
};

const getTodoElement = (todo, index) => {
  const { text, completed } = todo;

  const element = createNewTodoNode();

  element.querySelector('input.edit').value = text;
  element.querySelector('label').textContent = text;

  if (completed) {
    element.classList.add('completed');
    element.querySelector('input.toggle').checked = true;
  }

  // 최상단에만 이벤트 리스너를 붙여
  // 그리고 식별자(?)를 추가해 data-index
  element.querySelector('button.destroy').dataset.index = index;

  return element;
};

export default (targetElement, state, events) => {
  const { todos } = state;
  const { deleteItem } = events;
  const newTodoList = targetElement.cloneNode(true);

  newTodoList.innerHTML = '';

  todos
    .map((todo, index) => getTodoElement(todo, index))
    .forEach((element) => {
      newTodoList.appendChild(element);
    });

  // 클릭이벤트가 'button.destroy' 에서 발생한 것이면,
  // 사전에 정의된 삭제 이벤트 수행
  newTodoList.addEventListener('click', (e) => {
    if (e.target.matches('button.destroy')) {
      deleteItem(e.target.dataset.index);
    }
  });

  return newTodoList;
};
