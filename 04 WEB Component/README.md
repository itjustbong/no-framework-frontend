# 웹 구성 요소

[Custom-elements](https://ko.javascript.info/custom-elements)

- 상단 링크에 관련 내용이 책보다 더 자세하게, 쉽게 설명되어 있습니다!

## 서론

- 컴포넌트를 기반으로 하는 웹 개발이 요즘 유행
- 해당 과정에서는, 구성 요소 레지스트리를 활용하였었음
- 최신 브라우저에서는 Component 관련 네이티브 API세트를 사용하여 구성 요소를 사용할 수 있음

## 개념

### API

- HTML 템플릿: `<template>` 태그는 렌더링 되지는 않지만, 동적인 컨텐츠를 생성하는 데, `스탬프`로 사용될 수 있음
- 사용자 정의 요소: 자신만의 DOM 요소를 작성할 수 있음
- 쉐도우 DOM: 외부의 DOM에 영향을 받지 않아야하는 경우에 유용하게 사용가능.
  다른 사람들과 공유할 수 있도록 구성 요소 라이므러리나 위젯을 개발하는데 유용

#### 쉐도우 DOM

- 쉐도우 DOM과 가상 DOM의 존재 목적은 각각 다름
  - 쉐도우 DOM은 캡슐화와 관련되어 있음 [쉐도우 돔의 설명](https://ui.toast.com/posts/ko_20170721)
  - 가상 DOM은 성능과 관련되어 있음

#### 사용자 정의 요소

- 사용자 정의 태그를 사용할 때에는, 대시로 구분된 두 단어 이상의 태그를 사용해야 함
- 쉽게 접근하자면, 사용자 정의 요소는 "HTML요소를 확장하는 자바스크립트 클래스 일 뿐임."

#### [예시] 쉐도우 DOM을 더한, 사용자 정의 요소

```javascript
// 사용자 정의 요소를 만듦
// 해당 요소에는 라이프 사이클 콜백들이 선언되어 있음
class MyElement extends HTMLElement {
    static get observedAttributes() {return ['lang']; }

    constructor() {
      super();

      // add shadow root in constructor
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
        <style>div { background-color: #82b74b; }</style>
        <div>yey</div>
      `;
      this._yey = shadowRoot.querySelector('div');
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (attr == 'lang') {
        let yey;
        switch (newValue) {
          case 'ko':
            yey = '만세!';
          break;
          case 'es':
            yey = 'hoora!';
          break;
          case 'jp';
            yey = '万歳!';
          break;
          default:
            yey = 'yey!';
        }

        this._yey.innerText = yey;
      }
    }

    yell() {
      alert(this._yey.innerText);
    }
  }

  // 위에서 제작한 사용자 정의 구성 요소를 사용하기 위해,
  // 브라우저 구성 요소 레지스트리에 추가해야함.
  window.customElements.define('my-element', MyElement);
```

- 위 사용자 정의 구성 요소는 하기와 같이 사용할 수 있음

```HTML
<body>
  <my-element />
</body>
```

#### 속성 관리

- 사용자 웹 구성 요소는, 어떤 프레임워크와도 호환 가능한 새로운 구성 요소를 만들 수 있다는 것이 장점
- 사용자 정의 요소에서도 속성을 추가하거나 얻을 수 있는 방법이 있어야겠지?
  - 요소의 속성은 getter와 setter로 구현 가능함!

```javascript
class MyElement extends HTMLElement {
  get color() {
    return this.getAttribute('color') || DEFAULT_COLOR;
  }
  set color(value) {
    this.setAttribute('color', value);
  }
  //...
}
```

- 위에서 구현된 색상관련 게터와 세터는 단순히 기존 API를 사용하는 것 뿐임.
  활용법은 하기와 같음

  ```HTML
    <my-element color="red"></my-element>
  ```

- 단, 문자열이 아닌 다른 값을 전달하기에 어려움이 있음
  객체를 문자열로 변경하여 전달하던지 해야함

- 그리고 만약 다음과 같은 코드로 위 코드를 변경했다고 하면, 화면에 변화가 일어나지 않는다
  `요소.color = "balck"` <br />

  > 변화가 없는 이유에 대해 누가 아시는 분?
  >
  > In the current implementation of <time-formatted>, after the element is rendered, further attribute changes don’t have any effect. That’s strange for an HTML element. Usually, when we change an attribute, like a.href, we expect the change to be immediately visible. So let’s fix this.
  >
  > -javascript.info

  - 해결책1: set color(){} 를 이용하는 법
  - 해결책2: DOM 의 라이프사이클에서 속성이 변경되도록, <br />
    `attributeChangedCallback` 메서드를 사용하는 것. <br />
    해당 메소드는 속성이 변할 때마다 호출됨.
  - 해결책2 의 코드

```javascript
export default class HelloWorld extends HTMLElement {
  // 변화 요소를 감지할 속성들을 배열로 담아서 던져주셈!
  static get observedAttributes() {
    // return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
    return ['color'];
  }

  // observedAttributes의 속성들의 변경되면 호출됨.
  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.div) {
      return;
    }

    if (name === 'color') {
      // 여기서 속성을 변경하면, 자동으로 반영됨
      this.div.style.color = newValue;
    }
  }
  // ...
}
```
