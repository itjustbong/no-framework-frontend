let template;

const getTemplate = () => {
  if (!template) {
    template = document.getElementById('todo-app');
  }

  return template.content.firstElementChild.cloneNode(true);
};

const addEvents = (targetElement, events) => {
  targetElement.querySelector('.new-todo').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      // 값을 입력하는데, 사전에 정의한 이벤트를 통해서 저장
      events.addItem(e.target.value);
      e.target.value = '';
    }
  });
};

export default (targetElement, state, events) => {
  const newApp = targetElement.cloneNode(true);

  newApp.innerHTML = '';
  newApp.appendChild(getTemplate());

  addEvents(newApp, events);

  return newApp;
};
