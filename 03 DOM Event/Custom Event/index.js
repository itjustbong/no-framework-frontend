const EVENT_NAME = 'FiveCharInputValue';
const input = document.querySelector('input');

input.addEventListener('input', () => {
  const { length } = input.value;
  console.log('input length', length);
  // 입력된 글자가 5글자?
  if (length === 5) {
    const time = new Date().getTime();
    // 커스텀 이벤트 만들고,
    const event = new CustomEvent(EVENT_NAME, {
      detail: {
        time,
      },
    });

    // 이벤트 실행시켜버려
    // 근데, event에는 어떤 이벤트인지에 대한 내용과 전달할 값이 담겨 있어.
    input.dispatchEvent(event);
  }
});

input.addEventListener(EVENT_NAME, (e) => {
  console.log('handling custom event...', e.detail);
});
