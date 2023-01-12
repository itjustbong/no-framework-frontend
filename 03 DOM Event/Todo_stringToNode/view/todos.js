// const getTodoElement = (todo) => {
//   const { text, completed } = todo;

//   // 기존의 방법은 문자열을 리턴해버림...
//   return `
//       <li ${completed ? 'class="completed"' : ''}>
//         <div class="view">
//           <input
//             ${completed ? 'checked' : ''}
//             class="toggle"
//             type="checkbox">
//           <label>${text}</label>
//           <button class="destroy"></button>
//         </div>
//         <input class="edit" value="${text}">
//       </li>`;
// };

// export default (targetElement, { todos }) => {
//   const newTodoList = targetElement.cloneNode(true);
//   const todosElements = todos.map(getTodoElement).join('');
//   newTodoList.innerHTML = todosElements;
//   return newTodoList;
// };

//// NEW
let template;

const createNewTodoNode = () => {
  if (!template) {
    template = document.getElementById('todo-item');
  }

  return template.content.firstElementChild.cloneNode(true);
};

const getTodoElement = (todo) => {
  const { text, completed } = todo;

  // 여러개의 template을 활용할 수 있어
  const element = createNewTodoNode();

  element.querySelector('input.edit').value = text;
  element.querySelector('label').textContent = text;

  if (completed) {
    element.classList.add('completed');
    element.querySelector('input.toggle').checked = true;
  }

  return element;
};

export default (targetElement, { todos }) => {
  const newTodoList = targetElement.cloneNode(true);
  newTodoList.innerHTML = '';
  // todos의 양만큼 template를 활용한 노드를 만들어
  todos.map(getTodoElement).forEach((element) => {
    newTodoList.appendChild(element);
  });

  return newTodoList;
};
