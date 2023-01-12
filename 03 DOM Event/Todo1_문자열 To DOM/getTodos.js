// window.faker를 통해서 다양한 랜덤 값을 뽑을 수 있음
const { faker } = window;

const createElement = () => ({
  text: faker.random.words(2),
  completed: faker.random.boolean(),
});

const repeat = (elementFactory, number) => {
  const array = [];
  for (let index = 0; index < number; index++) {
    array.push(elementFactory());
  }
  return array;
};

export default () => {
  const howMany = faker.random.number(10);
  // [{text, completed}, {text, completed}...] 를 반환
  return repeat(createElement, howMany);
};
